import FlightCardSkeleton from './FlightCardSkeleton'

export default function FlightLoader() {
  return (
    <div className="space-y-4">
      <div className="w-44 h-8 bg-gray-scattered rounded"></div>
      {Array.from({ length: 3 }).map((_, index) => (
        <FlightCardSkeleton key={index} />
      ))}
    </div>
  )
}
