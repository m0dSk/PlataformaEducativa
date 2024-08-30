import React from 'react';


function SubjectCard({ item }) {
  return (
    <div className="border-4 border-gray-800 bg-gray-800 hover:bg-gray-700 hover:border-gray-700 rounded-md h-full p-4 flex items-center lg:h-32">
      <div className="text-white text-4xl mr-4">
        <i className={item.icon}></i> {/* Aquí se crea el <i> con la clase del icono */}
      </div>
      <div className="text-white">
        <label className="font-bold text-lg">{item.name}</label>
      </div>
    </div>
  );
}

export default SubjectCard;