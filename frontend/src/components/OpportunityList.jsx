import { useEffect, useState } from 'react';
import api from '../services/api';
import OportunidadForm from './OportunidadForm';
import { Link } from 'react-router-dom';


export default function OpportunityList() {
  const [oportunidades, setOportunidades] = useState([]);

  const cargarOportunidades = () => {
    api.get('/oportunidades')
      .then(res => setOportunidades(res.data))
      .catch(err => console.error('Error al cargar oportunidades:', err));
  };

  useEffect(() => {
    cargarOportunidades();
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <OportunidadForm onSuccess={cargarOportunidades} />
      <h1 className="text-2xl font-bold text-primary mb-4">Oportunidades</h1>
      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-primary text-white">
            <tr>
              <th className="p-2 text-left">Empresa</th>
              <th className="p-2 text-left">Contacto</th>
              <th className="p-2 text-left">Número</th>
              <th className="p-2 text-left">Gerente</th>
              <th className="p-2 text-left">Estado</th>
            </tr>
          </thead>
          <tbody>
            {oportunidades.map((o) => (
              <tr key={o.id} className="border-b hover:bg-gray-100">
                    <td className="p-2">
                      <Link to={`/oportunidad/${o.id}`} className="text-blue-600 hover:underline">
                        {o.empresa_cliente}
                      </Link>
                    </td>
                <td className="p-2">{o.contacto}</td>
                <td className="p-2">{o.numero_oportunidad}</td>
                <td className="p-2">{o.gerente_cuenta}</td>
                <td className="p-2">{o.estado}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
