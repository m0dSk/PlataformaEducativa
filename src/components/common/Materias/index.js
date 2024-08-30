import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Subjects } from '../../../data/materias'
import { CallsContact } from '../../../data/sidebar';
import SubjectCard from "./subject-card"; // Asegúrate de que la ruta sea correcta

function Materias() {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/materias.json') // Asegúrate de que la ruta sea correcta
      .then(response => response.json())
      .then(data => setSubjects(data))
      .catch(error => console.error('Error al cargar las materias:', error));
  }, []);

  const handleSubjectClick = (item) => {
    const { id, name } = item;
    navigate('/materia-detalles', { state: { id, name } });
  };

  return (
    <div className="grid gap-4 p-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:p-16">
      {subjects.map((item) => (
        <div key={item.id} onClick={() => handleSubjectClick(item)}>
          <SubjectCard item={item} />
        </div>
      ))}
    </div>
  );
}

export default Materias;