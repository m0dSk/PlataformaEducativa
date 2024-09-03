import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from "react";

function Navbar() {
    return (
        <nav className="navbar flex flex-row md:flex-col fixed bottom-0 md:bottom-auto md:left-0 bg-white text-gray-800 w-full md:w-40 h-16 md:h-full overflow-x-scroll shadow-lg rounded-t-md md:rounded-r-md border border-gray-200 z-[10]">
          <Link to="/actividades" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi-rr-bell text-indigo-600"></i>
            <span className='text-sm font-semibold'>Actividad</span>
          </Link>
          <Link to="/chat" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-comment-alt text-indigo-600"></i>
            <span className='text-sm font-semibold'>Chat</span>
          </Link>
          <Link to="/tareas" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-journal-alt text-indigo-600"></i>
            <span className='text-sm font-semibold'>Tareas</span>
          </Link>
          <Link to="/calificaciones" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-memo-circle-check text-indigo-600"></i>
            <span className='text-sm font-semibold'>Calificaciones</span>
          </Link>
          <Link to="/materias" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-100 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-books text-indigo-600"></i>
            <span className='text-sm font-semibold'>Materias</span>
          </Link>
        </nav>
    );
}

export default Navbar;
