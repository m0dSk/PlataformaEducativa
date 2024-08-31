import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/materias');
  };

  return (
    <button
      className="mt-4 p-2 bg-blue-950 text-white rounded mb-2"
      onClick={handleBackClick}
    >
      <i className="fi fi-rr-undo" /> Regresar
    </button>
  );
}

export default BackButton;