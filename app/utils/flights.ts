import type { Flight, Sort } from 'types'
import { compareTimestamps } from './convertTime'

export function sortFlightsByTime(flights: Flight[], sort: Sort): Flight[] {
  return [...flights].sort((a, b) => compareTimestamps(a, b, sort))
}

export function filterFlights(flights: Flight[], searchValue: string) {
  const searchTerm = searchValue.toLowerCase()

  return flights.filter(
    (flight) =>
      flight.flightNumber.toLowerCase().includes(searchTerm) || flight.airport.toLowerCase().includes(searchTerm)
  )
}

export function limitFlights(flights: Flight[], limit: number): Flight[] {
  return flights.slice(0, limit)
}
