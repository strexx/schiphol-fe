export default function FlightCardSkeleton() {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-md transition-colors duration-200 shadow-md hover:shadow-lg group">
      <div className="flex flex-col">
        <div className="w-20 h-4 bg-gray-scattered rounded mb-2"></div>
        <div className="w-32 h-5 bg-gray-scattered rounded"></div>
      </div>

      <div className="flex-1 pl-4">
        <div className="w-2/6 h-4 bg-gray-scattered rounded mb-2"></div>
        <div className="w-1/6 h-4 bg-gray-scattered rounded"></div>
      </div>

      <div className="w-6 h-6 bg-gray-scattered rounded-full"></div>
    </div>
  )
}
