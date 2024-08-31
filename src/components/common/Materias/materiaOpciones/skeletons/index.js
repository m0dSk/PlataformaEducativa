// SkeletonLoader.js
import React from 'react';

function SkeletonLoader() {
  return (
    <div className="max-w-7xl mx-auto bg-blue-600 shadow-lg rounded-lg animate-pulse mb-8">
      <div className="h-12 w-12 bg-gray-400 rounded-full mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
    </div>
  );
}

export default SkeletonLoader;