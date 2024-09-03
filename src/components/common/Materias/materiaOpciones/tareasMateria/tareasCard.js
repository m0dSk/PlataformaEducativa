import React from 'react'

const TareasCard = ({ title, date, description, status, isExpanded, onToggleExpand }) => {
  const isOverdue = status === 'Vencida';

  return (
    <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="text-sm text-gray-600">{date}</span>
        </div>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
            isOverdue ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
          }`}>
            {status}
          </span>
          <button onClick={onToggleExpand} className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 hover:bg-indigo-200 transition duration-150">
            <svg className={`w-5 h-5 text-indigo-600 transform ${isExpanded ? 'rotate-90' : ''}`} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TareasCard;