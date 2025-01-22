import type { Route } from './+types/home'
import Container from '~/components/Container/Container'
import { useCallback, useEffect, useState } from 'react'
import SearchBar from '~/components/SearchBar/SearchBar'
import FlightResults from '~/components/Flights/FlightResults'
import { useDebounce } from '~/hooks/useDebounce'
import validateSearch from '~/utils/validateSearch'
import useFlightsContext from '~/context/FlightsContext'
import FlightLoader from '~/components/Flights/FlightLoader'
import NoFlightsFound from '~/components/Flights/NoFlightsFound'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Schiphol - Search Flights' }, { name: 'description', content: 'Search for flights' }]
}

export default function Home() {
  const { flights, loading, error, fetchFlights, isInitialized, search, setSearch, limit } = useFlightsContext()
  const debouncedSearch = useDebounce(search, 500)

  const [inputError, setInputError] = useState<string | null>(null)

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearch(value)
    setInputError(null)
  }, [])

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!validateSearch(search)) {
        setInputError('Please enter at least 3 characters')
        return
      }

      fetchFlights(search, limit)
    },
    [search, limit]
  )

  const handleClear = useCallback(() => {
    setSearch('')
    setInputError(null)
  }, [])

  useEffect(() => {
    if (validateSearch(debouncedSearch)) {
      fetchFlights(debouncedSearch, limit)
    }
  }, [debouncedSearch, limit])

  return (
    <Container>
      <h1 className="mb-8">Welcome to Schiphol Flights</h1>
      <div className="bg-gradient-at-schiphol p-4 rounded-md mb-8">
        <h2 className="text-lg font-semibold mb-4">Search for flights</h2>
        <SearchBar
          loading={loading}
          error={error?.message || ''}
          inputError={inputError}
          value={search}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          handleClear={handleClear}
        />
      </div>

      {loading && <FlightLoader />}
      {isInitialized && !loading && flights.length === 0 && <NoFlightsFound />}
      {!loading && flights.length > 0 && <FlightResults />}
    </Container>
  )
}
