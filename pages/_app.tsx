import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthProvider, { useAuth } from '../context/useAuth'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import LoadingProvider from '../context/useLoading'

const authPathNameArray = ['/']

function PrivateRoute({ children }: any) {
  const { isAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuth) {
      router.push('/login')
    }
  }, [router, isAuth])
  return isAuth ? children : null
}
function PublicRoute({ children }: any) {
  const { isAuth } = useAuth()
  const router = useRouter()
  useEffect(() => {
    if (isAuth) {
      router.push('/')
      return
    }
  }, [isAuth])
  return children
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isAuthRoute = authPathNameArray.includes(router.pathname)

  useEffect(() => {
    const handleRouteChange = (url: any, { shallow }: any) => {
      console.log(
        `App is changing to ${url} ${
          shallow ? 'with' : 'without'
        } shallow routing`
      )
    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (
    <LoadingProvider>
      <AuthProvider>
        {isAuthRoute ? (
          <PrivateRoute>
            <Component {...pageProps} />
          </PrivateRoute>
        ) : (
          <PublicRoute>
            <Component {...pageProps} />
          </PublicRoute>
        )}
      </AuthProvider>
    </LoadingProvider>
  )
}

export default MyApp
