export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 space-y-4 animate-pulse">

      {/* Top heading skeleton */}
      <div className="h-8 w-1/3 bg-gray-300 rounded"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

        {/* Left skeleton */}
        <div className="md:col-span-3 space-y-3">
          <div className="h-6 w-2/3 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>

        {/* Middle skeleton (news cards) */}
        <div className="md:col-span-6 space-y-4">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow space-y-3"
            >
              <div className="h-40 bg-gray-300 rounded"></div>
              <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
              <div className="h-4 w-full bg-gray-300 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
            </div>
          ))}
        </div>

        {/* Right skeleton */}
        <div className="md:col-span-3 space-y-3">
          <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
          <div className="h-20 bg-gray-300 rounded"></div>
        </div>

      </div>
    </div>
  );
}