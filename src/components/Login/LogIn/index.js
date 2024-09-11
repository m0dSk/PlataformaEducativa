import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!username || !password) {
      setError('Por favor, llena todos los campos');
      return;
    }

    // Resetear mensajes anteriores
    setError('');
    setSuccessMessage('');

    try {
      // Enviar petición POST al backend
      const response = await axios.post('http://localhost:8000/api/login/', {
        username: username,
        password: password,
      });

      // Si el login es exitoso, mostramos el token
      setSuccessMessage(`Inicio de sesión exitoso, token: ${response.data.token}`);
      console.log('Token recibido:', response.data.token);

      // Guardar el token en localStorage para usarlo en solicitudes futuras
      localStorage.setItem('token', response.data.token);

    } catch (err) {
      // Si hay un error, mostramos el mensaje correspondiente
      if (err.response) {
        setError(err.response.data.error || 'Error al iniciar sesión');
      } else {
        setError('Error en la conexión con el servidor');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700">Nombre de Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Ingresa tu contraseña"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
