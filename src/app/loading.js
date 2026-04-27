export default function Loading() {
  return (
    <div className="min-h-screen container mx-auto bg-gray-50 p-4 animate-pulse">
      
 
      <div className="h-10 w-1/3 bg-gray-300 rounded mb-6"></div>

   
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <div className="h-48 bg-gray-300 rounded mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      </div>

     
      <div className="space-y-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="flex gap-4 bg-white p-3 rounded-lg shadow"
          >
            <div className="w-24 h-24 bg-gray-300 rounded"></div>
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
              <div className="h-3 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}