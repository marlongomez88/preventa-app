import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';

export default function OpportunityDetail() {
  const { id } = useParams();
  const [oportunidad, setOportunidad] = useState(null);
  const [notas, setNotas] = useState([]);
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    api.get(`/oportunidades`)
      .then(res => {
        const encontrada = res.data.find(o => o.id === parseInt(id));
        setOportunidad(encontrada);
      });

    api.get(`/notas/${id}`).then(res => setNotas(res.data));
    api.get(`/documentos/oportunidad/${id}`).then(res => setDocumentos(res.data));
  }, [id]);

  if (!oportunidad) return <p className="p-4">Cargando...</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-primary mb-2">Detalle de Oportunidad</h1>
      <div className="bg-white p-4 rounded shadow mb-4">
        <p><strong>Empresa:</strong> {oportunidad.empresa_cliente}</p>
        <p><strong>Contacto:</strong> {oportunidad.contacto}</p>
        <p><strong>Número:</strong> {oportunidad.numero_oportunidad}</p>
        <p><strong>Gerente:</strong> {oportunidad.gerente_cuenta}</p>
        <p><strong>Estado:</strong> {oportunidad.estado}</p>
      </div>

      <h2 className="text-xl font-semibold text-primary mb-2">Notas de seguimiento</h2>
      <ul className="mb-4">
        {notas.map(n => (
          <li key={n.id} className="bg-gray-100 p-2 mb-2 rounded">{n.contenido}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold text-primary mb-2">Documentos</h2>
      <ul>
        {documentos.map(d => (
          <li key={d.id} className="bg-gray-100 p-2 mb-2 rounded">
            <a href={d.ruta_archivo} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
              {d.nombre_archivo}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
