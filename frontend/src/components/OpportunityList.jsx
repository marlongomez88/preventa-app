// src/components/OpportunityList.jsx
import React from 'react';
import Layout from './Layout';

const OpportunityList = () => {
  // Datos de ejemplo
  const opportunities = [
    { 
      id: 1, 
      cliente: 'Empresa ACME', 
      monto: '$50,000', 
      estado: 'Activo' 
    },
    { 
      id: 2, 
      cliente: 'Corporación XYZ', 
      monto: '$75,000', 
      estado: 'En Negociación' 
    }
  ];

  return (
    <Layout>
      <div className="bg-white shadow-md rounded-lg">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold">Oportunidades</h2>
        </div>
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Cliente</th>
              <th className="p-3 text-left">Monto</th>
              <th className="p-3 text-left">Estado</th>
              <th className="p-3 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {opportunities.map((opp) => (
              <tr key={opp.id} className="border-b hover:bg-gray-50">
                <td className="p-3">{opp.id}</td>
                <td className="p-3">{opp.cliente}</td>
                <td className="p-3">{opp.monto}</td>
                <td className="p-3">
                  <span className={`
                    px-2 py-1 rounded 
                    ${opp.estado === 'Activo' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}
                  `}>
                    {opp.estado}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600 hover:underline">
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default OpportunityList;
