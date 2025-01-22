import FlightList from '~/components/Flights/FlightList'
import type { Route } from './+types/home'
import Container from '~/components/Container/Container'
import { getFlights } from '~/api/flights'
import NoFlightsFound from '~/components/Flights/NoFlightsFound'
import type { Flight } from 'types'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Schiphol - All Flights' }, { name: 'description', content: 'List of all flights' }]
}

export async function clientLoader(): Promise<Flight[]> {
  const flights = await getFlights()
  return flights
}

export default function Flights({ loaderData: flights }: { loaderData: Flight[] }) {
  return (
    <Container>
      <h2 className="my-8">All Flights</h2>
      {flights && flights.length === 0 && <NoFlightsFound />}
      {flights && flights.length > 0 && <FlightList flights={flights} />}
    </Container>
  )
}
