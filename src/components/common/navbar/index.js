import { BrowserRouter as Router, Link } from 'react-router-dom';
import React from "react";
function Navbar() {
    return (
        <nav className="navbar flex flex-row md:flex-col fixed bottom-0 md:bottom-auto md:left-0 bg-gray-800 text-white w-full md:w-40 h-16 md:h-full overflow-x-scroll rounded-sm border border-gray-700 z-[10]">
          <Link to="/actividades" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-700 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi-rr-backpack"></i>
            <span className='text-sm'>Actividades</span>
          </Link>
          <Link to="/chat" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-700 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-comment-alt"></i>
            <span className='text-sm'>Chat</span>
          </Link>
          <Link to="/tareas" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-700 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-journal-alt"></i>
            <span className='text-sm'>Tareas</span>
          </Link>
          <Link to="/calificaciones" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-700 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-memo-circle-check"></i>
            <span className='text-sm'>Calificaciones</span>
          </Link>
          <Link to="/materias" className="navbar-item flex-1 md:flex-none p-4 text-center hover:bg-gray-700 flex flex-col md:flex-row md:space-x-2 space-y-0">
            <i className="fi fi-rr-books"></i>
            <span className='text-sm'>Materias</span>
          </Link>
        </nav>
    );
}

export default Navbar;
