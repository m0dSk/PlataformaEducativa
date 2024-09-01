import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Subjects } from '../../../data/materias'
import { CallsContact } from '../../../data/sidebar';
import SubjectCard from "./subject-card"; // Asegúrate de que la ruta sea correcta
import SubjectCardSkeleton from './materiaOpciones/skeletons/skeletonMaterias';

function Materias() {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      fetch('/materias.json') // Asegúrate de que la ruta sea correcta
        .then(response => response.json())
        .then(data => {
          setSubjects(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error al cargar las materias:', error);
          setLoading(false);
        });
    }, 2000); // Simular un retraso de 2 segundos
  }, []);

  const handleSubjectClick = (item) => {
    const { id, name } = item;
    navigate('/materia-detalles', { state: { id, name } });
  };

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:p-16">
      {loading ? (
        <>
          <SubjectCardSkeleton/>
          <SubjectCardSkeleton/>
          <SubjectCardSkeleton/>
          <SubjectCardSkeleton/>
        </>
      ) : (
        subjects.map((item) => (
          <div key={item.id} onClick={() => handleSubjectClick(item)}>
            <SubjectCard item={item} />
          </div>
        ))
      )}
    </div>
  );
}

export default Materias;