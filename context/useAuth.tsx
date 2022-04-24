import {
  createContext,
  useContext,
  useEffect,
  useState,
  FunctionComponent,
} from 'react'
import { useRouter } from 'next/router'
import {
  onAuthStateChanged,
  User,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebase'

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
  const router = useRouter()
  const [user, setUser] = useState<User | ISignInUser | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user: User | null) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid
          setUser(user)
          router.push('/')
          // ...
        } else {
          // User is signed out
          // ...
          router.push('/login')
        }
        // hide()
      },
      (error) => {
        // hide()
      },
      () => {
        // hide()
      }
    )
    return unsubscribe
  }, [])

  const value = {
    user,
    isAuth: !!user,
    signIn: async (userInput: ISignInUser) => {
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
      }
    },
    signUp: async (userInput: ISignInUser) => {
      try {
        const { email, password } = userInput
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        )
        const user = userCredential.user
      } catch (error: any) {
        // const errorCode = error.code
        // const errorMessage = error.message
        console.log(error)
      } finally {
      }
    },
    signOut: async () => {
      try {
        const result = await signOut(auth)
        // Sign-out successful.
        setUser(null)
      } catch (error) {
        console.log(error)
      } finally {
      }
    },
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
