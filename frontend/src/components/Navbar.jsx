import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <input 
        type="text" 
        placeholder="Buscar oportunidades..." 
        className="w-full max-w-md px-4 py-2 border rounded-lg"
      />
      <div className="flex items-center">
        <span className="mr-4">👤 Usuario</span>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

