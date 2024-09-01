
import TareasCard from './tareasCard'
import React, { useState, useEffect } from 'react';
import PanelMateria from '../../panelMateria';
import BackButton from '../backButton';
import TareasCardSkeleton from '../skeletons/tareasCardSkeleton';


function TareasMateriaSelect() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular un retraso en la carga de datos
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
    }, 2000); // Simular 2 segundos de retraso
  }, []);

  return (
    <div className='px-4'>
      <PanelMateria/>
      <div className='pt-12'>
        <BackButton/> 
      </div>
      <div className='px-4 pb-16'>
        {loading ? (
          // Mostrar skeletons mientras se carga
          <>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
              <TareasCardSkeleton/>
          </>
        ) : (
          // Mostrar las tareas cuando los datos se carguen
          tareas.map((tarea, index) => (
            <TareasCard 
              key={index}
              title={tarea.titulo}
              date={tarea.fecha}
              description={tarea.descripcion}
              status={tarea.estado}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default TareasMateriaSelect;