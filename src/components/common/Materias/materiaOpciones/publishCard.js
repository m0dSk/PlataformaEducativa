import React, { useState, useEffect } from 'react';
const PublishCard = ({ profileimg, username, likes, comentarios, contenido }) => {
  return (
    <div className="max-w-7xl mx-auto bg-blue-600 shadow-lg rounded-lg mb-4">
      <div className="px-6 py-5">
        <div className="flex items-start">
          {/* Imagen del usuario */}
          <img
            className="rounded-full flex-shrink-0 mr-5"
            src={profileimg}
            alt={`${username}'s profile`}
            width="50"
            height="50"
          />
          {/* Contenido de la tarjeta */}
          <div className="flex-grow truncate">
            {/* Encabezado de la tarjeta */}
            <div className="w-full sm:flex justify-between items-center mb-3">
              {/* Nombre del usuario */}
              <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">
                {username}
              </h2>
              {/* Botones de likes y comentarios */}
              <div className="flex-shrink-0 flex items-center space-x-3 sm:ml-2">
                <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.682 2.318A4.485 4.485 0 0 0 11.5 1 4.377 4.377 0 0 0 8 2.707 4.383 4.383 0 0 0 4.5 1a4.5 4.5 0 0 0-3.182 7.682L8 15l6.682-6.318a4.5 4.5 0 0 0 0-6.364Zm-1.4 4.933L8 12.247l-5.285-5A2.5 2.5 0 0 1 4.5 3c1.437 0 2.312.681 3.5 2.625C9.187 3.681 10.062 3 11.5 3a2.5 2.5 0 0 1 1.785 4.251h-.003Z" />
                  </svg>
                  <span>{likes} <span className="sr-only">likes</span></span>
                </button>
                <button className="flex items-center text-left text-sm font-medium text-indigo-100 hover:text-white group focus:outline-none focus-visible:border-b focus-visible:border-indigo-100">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mr-2 fill-current text-gray-300 group-hover:text-gray-200"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.1 0 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7Zm4 10.8v2.3L8.9 12H8c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8Z" />
                  </svg>
                  <span>{comentarios} <span className="sr-only">comments</span></span>
                </button>
              </div>
            </div>
            {/* Cuerpo de la tarjeta */}
            <div className="flex items-end justify-between whitespace-normal">
              {/* Contenido */}
              <div className="max-w-md text-indigo-100">
                <p className="mb-2">{contenido}</p>
              </div>
              {/* Enlace "Leer más" */}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishCard;