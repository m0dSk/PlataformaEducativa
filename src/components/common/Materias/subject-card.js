import React from 'react';


function SubjectCard({ item }) {
  return (
    <div className="border-2 border-gray-200 bg-white hover:bg-gray-100 hover:border-gray-300 rounded-lg shadow-md h-full p-4 flex items-center lg:h-32 transition duration-200 ease-in-out">
      <div className="text-indigo-600 text-4xl mr-4">
        <i className={item.icon}></i> {/* Aquí se crea el <i> con la clase del icono */}
      </div>
      <div className="text-gray-800">
        <label className="font-bold text-lg">{item.name}</label>
      </div>
    </div>
  );
}

export default SubjectCard;
