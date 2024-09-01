import React, { useState, useEffect } from 'react';

const PublishCard = ({ userID, username, profileimg, contenido, likes, comentarios, titulo }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        {/* Header con información del usuario */}
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-4" src={profileimg} alt={username} />
          <div>
            <h3 className="font-bold text-gray-800">{username}</h3>
            <p className="text-sm text-gray-600">Usuario ID/rol: {userID}</p>
          </div>
        </div>

        {/* Título de la publicación */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{titulo}</h2>

        {/* Contenido de la publicación */}
        <p className="text-gray-700 text-base mb-4">{contenido}</p>

        {/* Footer con likes y comentarios */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-4">
            <span className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              {likes}
            </span>
            <span className="flex items-center text-gray-600">
              <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
              </svg>
              {comentarios}
            </span>
          </div>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 hover:bg-indigo-200 transition duration-150">
            <svg className="w-5 h-5 text-indigo-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublishCard;