import React from 'react'

function TareasCardSkeleton() {
    return (
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4 animate-pulse">
        <div className="px-6 py-4">
          <div className="flex justify-between items-center mb-2">
            <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
          <div className="flex items-center justify-between">
            <div className="h-5 bg-gray-300 rounded w-1/4"></div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }
  
  export default TareasCardSkeleton;