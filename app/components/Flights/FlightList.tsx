import FlightCard from './FlightCard'
import type { Flight } from 'types'

export function FlightItem({ flight }: { flight: Flight }) {
  return (
    <li>
      <FlightCard key={flight.flightNumber} {...flight} />
    </li>
  )
}

export default function FlightList({ flights }: { flights: Flight[] }) {
  return (
    <ul className="space-y-4 mb-8">
      {flights.map((flight) => (
        <FlightItem key={flight.flightNumber} flight={flight} />
      ))}
    </ul>
  )
}
