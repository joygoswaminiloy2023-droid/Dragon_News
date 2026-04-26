import React from 'react';
      import Link from "next/link";

const notfound = () => {
    return (
        <div>
      


    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      
      <h2 className="text-2xl font-semibold mt-4">
        Page Not Found
      </h2>
      
      <p className="text-gray-600 mt-2">
        The page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-slate-900 text-white rounded-md hover:bg-pink-500"
      >
        Go Home
      </Link>
    </div>

        </div>
    );
};

export default notfound;