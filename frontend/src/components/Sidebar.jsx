import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { icon: '📋', name: 'Oportunidades', path: '/oportunidades' },
    { icon: '📊', name: 'Dashboard', path: '/dashboard' },
    { icon: '📁', name: 'Documentos', path: '/documentos' }
  ];

  return (
    <div className="w-64 bg-blue-600 text-white p-4">
      <div className="text-2xl font-bold mb-8">PreVentas</div>
      <nav>
        {menuItems.map((item) => (
          <Link 
            key={item.path} 
            to={item.path} 
            className="flex items-center p-3 hover:bg-blue-700 rounded transition"
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
