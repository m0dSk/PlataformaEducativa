
import TareasCard from './tareasCard'
import React, { useState, useEffect } from 'react';
import PanelMateria from '../../panelMateria';
import BackButton from '../backButton';
import TareasCardSkeleton from '../skeletons/tareasCardSkeleton';
import SubirTarea from './subirTarea';


function TareasMateriaSelect() {
  const [tareas, setTareas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedIndex, setExpandedIndex] = useState(null); // Nuevo estado

  useEffect(() => {

      fetch('http://localhost:8000/api/tareas/')
        .then(response => response.json())
        .then(data => {
          console.log('Datos recibidos:', data);  // Aquí se muestra el JSON en la consola
          setTareas(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar las tareas:', error);
          setLoading(false);
        });

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
                titulo={tarea.titulo}               // Ahora pasa titulo
                fecha_publicacion={tarea.fecha_entrega}          // Cambiado a fecha_entrega
                descripcion={tarea.descripcion}     // Pasa la descripcion
                status={tarea.status}               // Pasa el estado correcto
                isExpanded={expandedIndex === index}
                onToggleExpand={() => toggleExpand(index)}
              />
              {expandedIndex === index && (
                <div className="m-4">
                  {/* Componente adicional que se despliega */}

                  <SubirTarea/>
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