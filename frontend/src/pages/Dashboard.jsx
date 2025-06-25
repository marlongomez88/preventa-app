import React from 'react';
import Layout from '../components/Layout';

const DashboardCard = ({ title, value, icon, color }) => (
  <div className={`p-6 bg-white rounded-lg shadow-md flex items-center ${color}`}>
    <div className="text-4xl mr-4">{icon}</div>
    <div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
);

const Dashboard = () => {
  const cards = [
    { title: 'Total Oportunidades', value: 42, icon: '📊', color: 'border-l-4 border-blue-500' },
    { title: 'Oportunidades Activas', value: 24, icon: '🟢', color: 'border-l-4 border-green-500' },
    { title: 'Oportunidades Cerradas', value: 18, icon: '🏁', color: 'border-l-4 border-gray-500' }
  ];

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <DashboardCard 
            key={index} 
            title={card.title} 
            value={card.value} 
            icon={card.icon} 
            color={card.color} 
          />
        ))}
      </div>
      {/* Tabla de oportunidades recientes */}
    </Layout>
  );
};

export default Dashboard;
