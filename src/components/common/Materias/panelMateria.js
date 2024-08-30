import React from 'react';
import { NavLink } from 'react-router-dom';

function PanelMateria() {
  return (
    <div className="bg-blue-950 p-2 fixed top-0 w-full -ml-8">
      <nav className="flex justify-around flex-row md:-space-x-52">
        <NavLink 
          to="/publicaciones" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg bg-sky-500 py-2 px-4 rounded-md flex items-center" 
              : "text-white text-lg hover:text-cyan-500 py-2 px-4 rounded-md flex items-center"
          }
        >
          Publicaciones
        </NavLink>
        <NavLink 
          to="/archivos" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg bg-sky-500 py-2 px-4 rounded-md flex items-center" 
              : "text-white text-lg hover:text-cyan-500 py-2 px-4 rounded-md flex items-center"
          }
        >
          Archivos
        </NavLink>
        <NavLink 
          to="/tareasMateria" 
          className={({ isActive }) => 
            isActive 
              ? "text-white text-lg bg-sky-500 py-2 px-4 rounded-md flex items-center" 
              : "text-white text-lg hover:text-cyan-500 py-2 px-4 rounded-md flex items-center"
          }
        >
          Tareas
        </NavLink>
      </nav>
    </div>
  );
}

export default PanelMateria;
