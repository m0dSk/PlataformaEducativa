import React from 'react'

function SubjectCardSkeleton() {
  return (
    <div className="border-2 border-gray-200 bg-white rounded-lg shadow-md h-full p-4 flex items-center lg:h-32 animate-pulse mb-4">
      <div className="bg-gray-300 w-16 h-16 mr-4 rounded-full"></div>
      <div className="flex-1">
        <div className="bg-gray-300 h-6 w-3/4 mb-2 rounded"></div>
        <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
      </div>
    </div>
  );
}

export default SubjectCardSkeleton;
