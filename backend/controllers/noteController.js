const { Nota } = require('../models');

exports.crearNota = async (req, res) => {
  try {
    const { oportunidad_id } = req.params;
    const nuevaNota = await Nota.create({ ...req.body, oportunidad_id });
    res.status(201).json(nuevaNota);
  } catch (error) {
    console.error('Error al crear nota:', error);
    res.status(500).json({ error: 'Error al crear nota' });
  }
};


exports.obtenerNotasPorOportunidad = async (req, res) => {
  try {
    const { oportunidad_id } = req.params;
    const notas = await Nota.findAll({ where: { oportunidad_id } });
    res.status(200).json(notas);
  } catch (error) {
    console.error('Error al obtener notas:', error);
    res.status(500).json({ error: 'Error al obtener notas' });
  }
};

