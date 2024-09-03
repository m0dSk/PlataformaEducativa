
import TareasCard from './tareasCard'
import React, { useState, useEffect } from 'react';
import PanelMateria from '../../panelMateria';
import BackButton from '../backButton';
import TareasCardSkeleton from '../skeletons/tareasCardSkeleton';


function TareasMateriaSelect() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null); // Nuevo estado

  useEffect(() => {
    setTimeout(() => {
      fetch('/tareasmateria.json')
        .then(response => response.json())
        .then(data => {
          setTareas(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar las tareas:', error);
          setLoading(false);
        });
    }, 2000);
  }, []);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index); // Expandir/Colapsar
  };

  return (
    <div className='px-4'>
      <PanelMateria/>
      <div className='pt-12'>
        <BackButton/> 
      </div>
      <div className='px-4 pb-16'>
        {loading ? (
          <>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
          </>
        ) : (
          tareas.map((tarea, index) => (
            <div key={index}>
              <TareasCard 
                title={tarea.titulo}
                date={tarea.fecha}
                description={tarea.descripcion}
                status={tarea.estado}
                isExpanded={expandedIndex === index}
                onToggleExpand={() => toggleExpand(index)}
              />
              {expandedIndex === index && (
                <div className="m-4">
                  {/* Componente adicional que se despliega */}

                  <TareasCardSkeleton></TareasCardSkeleton>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TareasMateriaSelect;