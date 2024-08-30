import logo from './logo.svg';
import './App.css';
import Calls from './components/calls';
import Navbar from './components/common/navbar';
import Chat from './components/common/Chat';
import Actividades from './components/common/Actividades';
import Materias from './components/common/Materias';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MateriaDetalles from './components/common/Materias/MateriaDetalles';
import Publicaciones from './components/common/Materias/materiaOpciones/publicaciones';
import Archivos from './components/common/Materias/materiaOpciones/archivos';


function App() {
  return (
    <Router>
      <div className="flex h-screen " >
        {/* Navbar: se coloca a la izquierda y ocupa un ancho fijo en pantallas grandes */}
        <Navbar />

        {/* Contenedor para el contenido */}
        <div className="flex-1 p-4 md:pl-40 bg-gray-100 " >
          <Routes>
            <Route path="/actividades" element={<Actividades />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/tareas" element={<div>Tareas Content</div>} />
            <Route path="/calificaciones" element={<div>Calificaciones Content</div>} />
            <Route path="/materias" element={<Materias/>} />
            <Route path="/materia-detalles" element={<MateriaDetalles />} />
            <Route path="/publicaciones" element={<Publicaciones/>} />
            <Route path="/archivos" element={<Archivos />} />
            <Route path="/tareasMateria" element={<MateriaDetalles />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
