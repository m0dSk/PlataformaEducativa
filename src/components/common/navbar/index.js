import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from "react";

function Navbar() {
  return (
      <nav className="navbar flex flex-row md:flex-col fixed bottom-0 md:bottom-auto md:left-0 bg-white text-gray-800 w-full md:w-40 h-17 md:h-full overflow-x-scroll shadow-lg rounded-t-md md:rounded-r-md border border-gray-200 z-[10]">
        
        <Link to="/actividades" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col items-center">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21"></path>
          </svg>
          <span className='text-sm font-semibold'>Actividad</span>
        </Link>

        <Link to="/chat" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col items-center">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z"></path>
          </svg>
          <span className='text-sm font-semibold'>Chat</span>
        </Link>

        <Link to="/tareas" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col items-center">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16,5V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V5A4,4 0 0,0 4,9V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V9A4,4 0 0,0 16,5M10,4H14V5H10V4M12,9L14,11L12,13L10,11L12,9M18,20H6V16H8V18H9V16H18V20M18,15H6V9A2,2 0 0,1 8,7H16A2,2 0 0,1 18,9V15Z"></path>
          </svg>
          <span className='text-sm font-semibold'>Tareas</span>
        </Link>

        <Link to="/calificaciones" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col items-center">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className='text-sm font-semibold'>Calificaciones</span>
        </Link>

        <Link to="/materias" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col items-center">
          <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z"></path>
          </svg>
          <span className='text-sm font-semibold'>Materias</span>
        </Link>
      </nav>
  );
}

export default Navbar;
