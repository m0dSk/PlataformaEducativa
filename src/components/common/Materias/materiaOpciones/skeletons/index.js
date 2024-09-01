// SkeletonLoader.js
import React from 'react';

function SkeletonLoader() {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4 animate-pulse">
      <div className="px-6 py-4">
        {/* Header con información del usuario */}
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <div className="h-4 bg-gray-300 rounded w-24 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-20"></div>
          </div>
        </div>

        {/* Título de la publicación */}
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>

        {/* Contenido de la publicación */}
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>

        {/* Footer con likes y comentarios */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <div className="h-5 bg-gray-300 rounded w-12"></div>
            <div className="h-5 bg-gray-300 rounded w-12"></div>
          </div>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;