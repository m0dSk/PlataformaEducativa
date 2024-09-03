import React from 'react'

function SubirTarea() {
  return (
<div className="flex flex-col max-w-7xl mx-auto">
  <input 
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" 
    id="file_input" 
    type="file"
  />
  <button 
    className="mt-4 px-4 py-2 text-white bg-indigo-500 hover:bg-indigo-600 rounded-lg focus:outline-none transition-colors duration-200"
    onClick={() => {/* Función para subir la tarea */}}
  >
    Subir tarea
  </button>
</div>


  )
}

export default SubirTarea