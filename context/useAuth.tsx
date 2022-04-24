import {
  createContext,
  useContext,
  useEffect,
  useState,
  FunctionComponent,
  useMemo,
} from 'react'
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'
import { useLoading } from './useLoading'

interface ISignInUser {
  email: string
  password: string
}

interface IAuthContext {
  user: User | ISignInUser | null
  isAuth: boolean
  signIn: (user: ISignInUser) => void
  signUp: (user: ISignInUser) => void
  signOut: () => void
}

const defaultState = {
  user: null,
  isAuth: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
}

const AuthContext = createContext<IAuthContext>(defaultState)

type AuthProviderProps = {
  children: React.ReactNode
}

const AuthProvider: FunctionComponent<AuthProviderProps> = ({
  children,
}: AuthProviderProps) => {
  const { show, hide } = useLoading()
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | ISignInUser | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: User | null) => {
        show()
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid
          // ...
        } else {
          // User is signed out
          // ...
        }
        setUser(user)
        setLoading(false)
        hide()
      },
      (error) => {
        hide()
        setLoading(false)
      },
      () => {
        hide()
        setLoading(false)
      }
    )
    return unsubscribe
  }, [])

  const value = useMemo(
    () => ({
      user,
      isAuth: !!user,
      signIn: async (userInput: ISignInUser) => {
        show()
        try {
          const { email, password } = userInput
          const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = userCredential.user
          setUser(user)
        } catch (error) {
          console.log(error)
        } finally {
          hide()
        }
      },
      signUp: async (userInput: ISignInUser) => {
        show()
        try {
          const { email, password } = userInput
          const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
          const user = userCredential.user
          setUser(user)
        } catch (error) {
          // const errorCode = error.code
          // const errorMessage = error.message
          console.log(error)
        } finally {
          hide()
        }
      },
      signOut: async () => {
        show()
        try {
          const result = await signOut(auth)
          // Sign-out successful.
          setUser(null)
        } catch (error) {
          console.log(error)
        } finally {
          hide()
        }
      },
    }),
    [user]
  )

  return (
    <AuthContext.Provider value={value}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
