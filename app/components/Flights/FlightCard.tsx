import type { Flight } from 'types'
import IconChevronRight from '~/components/Icons/IconChevronRight'

export default function FlightCard({ flightNumber, airport, date, expectedTime, originalTime, url }: Flight) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-4 bg-white rounded-md transition-colors duration-200 shadow-md hover:shadow-lg group"
      aria-label={`Details for flight ${flightNumber} to ${airport}`}
    >
      <div className="text-left">
        <p className="text-xs">Original:{originalTime}</p>
        <p className="text-lg font-bold">Expected: {expectedTime}</p>
      </div>

      <div className="flex-1 pl-6">
        <p className="text-base font-semibold text-blue-600 group-hover:text-blue-800 transition-colors duration-200">
          {airport}
        </p>
        <p className="text-sm">{flightNumber}</p>
      </div>

      <div className="group-hover:text-gray-600 transition-all duration-200">
        <IconChevronRight className="transform group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </a>
  )
}
