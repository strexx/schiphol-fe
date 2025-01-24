import type { Flight, Sort } from 'types'
import { compareTimestamps } from './convertTime'

export function sortFlightsByTime(flights: Flight[], sort: Sort) {
  return [...flights].sort((a, b) => compareTimestamps(a, b, sort))
}

export function filterFlights(flights: Flight[], search: string) {
  const searchTerm = search.toLowerCase()

  return flights.filter(
    (flight) =>
      flight.flightNumber.toLowerCase().replace(/\s+/g, '').includes(searchTerm.replace(/\s+/g, '')) ||
      flight.airport.toLowerCase().includes(searchTerm)
  )
}

export function limitFlights(flights: Flight[], limit: number) {
  return flights.slice(0, limit)
}
