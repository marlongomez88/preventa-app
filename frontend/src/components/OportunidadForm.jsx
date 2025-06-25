import { useState } from 'react';
import api from '../services/api';

export default function OportunidadForm({ onSuccess }) {
  const [form, setForm] = useState({
    empresa_cliente: '',
    contacto: '',
    numero_oportunidad: '',
    gerente_cuenta: '',
    estado: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/oportunidades', form);
      onSuccess(); // recargar lista
        setForm({
          empresa_cliente: '',
          contacto: '',
          numero_oportunidad: '',
          gerente_cuenta: '',
          estado: '',
        });
    } catch (error) {
      console.error('Error al crear oportunidad:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow mb-4">
      <h2 className="text-lg font-bold mb-2">Nueva Oportunidad</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
            <input
              key={key}
              value={form[key]}
              onChange={handleChange}
              name={key}
              placeholder={key.replace('_', ' ')}
              className="border p-2 rounded"
              required
            />
        ))}
      </div>
      <button type="submit" className="mt-4 bg-primary text-white px-4 py-2 rounded">
        Guardar
      </button>
    </form>
  );
}
