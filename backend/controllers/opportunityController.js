const { Oportunidad } = require('../models');

exports.crearOportunidad = async (req, res) => {
  try {
    const nuevaOportunidad = await Oportunidad.create(req.body);
    res.status(201).json(nuevaOportunidad);
  } catch (error) {
    console.error('Error al crear oportunidad:', error);
    res.status(500).json({ error: 'Error al crear oportunidad' });
  }
};

exports.obtenerOportunidades = async (req, res) => {
  try {
    const oportunidades = await Oportunidad.findAll();
    res.status(200).json(oportunidades);
  } catch (error) {
    console.error('Error al obtener oportunidades:', error);
    res.status(500).json({ error: 'Error al obtener oportunidades' });
  }
};
