import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AuthProvider, { useAuth } from '../context/useAuth'
import { useRouter } from 'next/router'
import { useEffect, useLayoutEffect } from 'react'
import LoadingProvider from '../context/useLoading'

// const authPathNameArray = ['/']

// function PrivateRoute({ children }) {
//   const { user } = useAuth()
//   const router = useRouter()
//   useLayoutEffect(() => {
//     if (!user) {
//       router.push('/login')
//       // return
//     }
//   }, [router, user])
//   return children
// }
// function PublicRoute({ children }) {
//   const { user } = useAuth()
//   const router = useRouter()
//   useEffect(() => {
//     if (user) {
//       router.push('/')
//       return
//     }
//   }, [user])
//   return children
// }

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  // const isAuthRoute = authPathNameArray.includes(router.pathname)
  return (
    <LoadingProvider>
      <AuthProvider>
        <Component {...pageProps} />
        {/* {isAuthRoute ? (
        <PrivateRoute>
        <Component {...pageProps} />
        </PrivateRoute>
        ) : (
          <PublicRoute>
          <Component {...pageProps} />
          </PublicRoute>
        )} */}
      </AuthProvider>
    </LoadingProvider>
  )
}

export default MyApp
