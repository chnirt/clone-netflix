import {
  createContext,
  useContext,
  useState,
  FunctionComponent,
  useMemo,
} from 'react'

interface ILoadingContext {
  show: () => void
  hide: () => void
}

const defaultState = {
  show: () => {},
  hide: () => {},
}

const LoadingContext = createContext<ILoadingContext>(defaultState)

type LoadingProviderProps = {
  children: React.ReactNode
}

const LoadingProvider: FunctionComponent<LoadingProviderProps> = ({
  children,
}: LoadingProviderProps) => {
  const [count, setCount] = useState<Number>(0)

  const value = useMemo(
    () => ({
      show: () => setCount((prevState) => +prevState + 1),
      hide: () => setCount((prevState) => Math.max(+prevState - 1, 0)),
    }),
    [count]
  )

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {count > 0 && (
        <div className="absolute top-0 right-0 left-0 bottom-0 ">
          <span>Loading</span>
        </div>
      )}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)

export default LoadingProvider
