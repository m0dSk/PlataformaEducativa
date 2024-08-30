import { useNavigate, useLocation } from 'react-router-dom';
import PanelMateria from "./panelMateria"; // Asegúrate de que la ruta sea correcta

function MateriaDetalles() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name } = location.state || {};

  const handleBackClick = () => {
    navigate('/materias');
  };

  return (
    <div className="p-4">
      <PanelMateria></PanelMateria>
      <h2 className="text-lg font-bold">{name}</h2>
      <p>Detalles de la materia {name} (ID: {id}).</p>
      <button
        className="mt-4 p-2 bg-blue-950 text-white rounded"
        onClick={handleBackClick}
      >
       <i class="fi fi-rr-undo"/> Regresar
      </button>
    </div>
  );
}

export default MateriaDetalles;
