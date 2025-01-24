import Container from '~/components/Container/Container'
import { getFlights } from '~/api/flights'
import NoFlightsFound from '~/components/Flights/NoFlightsFound'
import type { Flight } from 'types'
import FlightLoader from '~/components/Flights/FlightLoader'
import FlightList from '~/components/Flights/FlightList'
import { useLoaderData } from '@remix-run/react'

export function meta() {
  return [{ title: 'Schiphol - All Flights' }, { name: 'description', content: 'List of all flights' }]
}

export async function loader({ request }: { request: Request }): Promise<Flight[]> {
  const baseUrl = new URL(request.url).origin
  const apiUrl = `${baseUrl}/api/flights`

  const flights = await getFlights(apiUrl)
  return flights
}

export default function Flights() {
  const flights = useLoaderData<Flight[]>()

  return (
    <Container>
      <h1 className="mb-8">All Flights</h1>
      {!flights && <FlightLoader />}
      {flights && flights.length === 0 && <NoFlightsFound />}
      {flights && flights.length > 0 && <FlightList flights={flights} />}
    </Container>
  )
}
