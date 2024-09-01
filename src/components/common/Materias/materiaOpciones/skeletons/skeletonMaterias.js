import React from 'react'

function SubjectCardSkeleton() {
  return (
    <div className="border-4 border-gray-800 bg-gray-800 rounded-md h-full p-4 flex items-center lg:h-32 animate-pulse mb-0">
    <div className="bg-gray-700 w-16 h-16 mr-4 rounded-full"></div>
    <div className="flex-1">
      <div className="bg-gray-700 h-6 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-700 h-6 w-1/2 rounded"></div>
    </div>
  </div>
  )
}

export default SubjectCardSkeleton