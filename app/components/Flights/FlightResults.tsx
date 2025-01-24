import FlightList from './FlightList'
import FlightSort from './FlightSort'
import useFlightsContext from '~/context/FlightsContext'
import FlightLimit from './FlightLimit'

export default function FlightResults() {
  const { sort, handleSort, sortedFlights, limit, handleLimit } = useFlightsContext()

  return (
    <section className="flight-results" data-testid="flight-results">
      <div className="flex justify-between mb-4 sm:flex-row flex-col">
        <span className="text-2xl font-bold text-dusk font-sans mb-4 sm:mb-0">
          {sortedFlights.length} flight{sortedFlights.length > 1 ? 's' : ''} found
        </span>
        <div className="sm:ml-auto">
          <div className="flex sm:flex-row gap-2">
            <FlightLimit limit={limit} handleLimit={handleLimit} />
            <FlightSort handleSort={handleSort} sort={sort} />
          </div>
        </div>
      </div>
      <FlightList flights={sortedFlights} />
    </section>
  )
}
