import React, { useState, useEffect } from 'react';
import PanelMateria from '../panelMateria'
import BackButton from './backButton'
import PublishCard from './publishCard'
import SkeletonLoader from './skeletons';

function Publicaciones() {
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  useEffect(() => {
    // Simular un retraso en la carga de datos
    setTimeout(() => {
      fetch('/publishexample.json')
        .then(response => response.json())
        .then(data => {
          setPublicaciones(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar las publicaciones:', error);
          setLoading(false);
        });
    }, 2000); // Simular 2 segundos de retraso
  }, []);

  return (
    <div className='px-4 pb-16'>
      {loading ? (
        // Mostrar skeletons mientras se carga
        <>
          <SkeletonLoader/>
          <SkeletonLoader/>
          <SkeletonLoader/>

        </>
      ) : (
        // Mostrar las publicaciones cuando los datos se carguen
        publicaciones.map((publicacion, index) => (
          <PublishCard 
            key={index}
            userID={publicacion.userID}
            username={publicacion.username}
            profileimg={publicacion.profileimg}
            contenido={publicacion.contenido}
            likes={publicacion.likes}
            comentarios={publicacion.comentarios}
            titulo={publicacion.titulo}
          />
        ))
      )}
    </div>
  );
}

export default Publicaciones;