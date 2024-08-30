import React from 'react'
import { Link } from 'react-router-dom';

function PanelMateria() {
  return (
    <div className="bg-blue-950 p-4 fixed top-0 w-full -ml-8 " >
        <nav className="flex justify-around ">
            <Link to="/publicaciones" className="text-white text-lg hover:text-gray-500">
                Publicaciones
            </Link>
            <Link to="/archivos" className="text-white text-lg hover:bg-gray-700">
                Archivos
            </Link>
            <Link to="/tareasMateria" className="text-white text-lg hover:bg-gray-700">
                Tareas
            </Link>
        </nav>
    </div>
  );
}

export default PanelMateria;