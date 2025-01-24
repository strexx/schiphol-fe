import { createContext, useContext, useState } from 'react'
import type { Flight, Sort } from 'types'
import { getFlightsBySearch } from '~/api/flights'
import { DEFAULT_LIMIT_SEARCH, DEFAULT_SEARCH_SORT } from '~/constants'
import { sortFlightsByTime } from '~/utils/flights'

interface FlightsContextType {
  flights: Flight[]
  sortedFlights: Flight[]
  setFlights: (flights: Flight[]) => void
  sort: Sort
  setSort: (sort: Sort) => void
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  error: Error | null
  setError: (error: Error | null) => void
  search: string
  setSearch: (search: string) => void
  isInitialized: boolean
  setIsInitialized: (isInitialized: boolean) => void
  fetchFlights: (searchQuery: string, limit?: number) => Promise<void>
  limit: number
  setLimit: (limit: number) => void
  handleLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FlightsContext = createContext<FlightsContextType | undefined>(undefined)

export function FlightsProvider({ children }: { children: React.ReactNode }) {
  const [flights, setFlights] = useState<Flight[]>([])
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const [sort, setSort] = useState<Sort>(DEFAULT_SEARCH_SORT)
  const [limit, setLimit] = useState<number>(DEFAULT_LIMIT_SEARCH)

  const handleLimit = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(Number(event.target.value))
  }

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value as Sort)
  }

  const fetchFlights = async (searchQuery: string, limit = DEFAULT_LIMIT_SEARCH) => {
    setLoading(true)
    setError(null)

    try {
      const response = await getFlightsBySearch(searchQuery, limit)
      setFlights(response)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
      setIsInitialized(true)
    }
  }

  const sortedFlights = sortFlightsByTime(flights, sort)

  return (
    <FlightsContext.Provider
      value={{
        flights,
        setFlights,
        sort,
        setSort,
        handleSort,
        search,
        setSearch,
        loading,
        setLoading,
        error,
        setError,
        sortedFlights,
        isInitialized,
        setIsInitialized,
        fetchFlights,
        limit,
        setLimit,
        handleLimit
      }}
    >
      {children}
    </FlightsContext.Provider>
  )
}

export default function useFlightsContext() {
  const context = useContext(FlightsContext)

  if (context === undefined) {
    throw new Error('useFlights must be used within a FlightsProvider')
  }

  return context
}
