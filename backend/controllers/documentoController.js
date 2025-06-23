// controllers/documentoController.js
const { Documento } = require('../models');

exports.obtenerDocumentosPorOportunidad = async (req, res) => {
  try {
    const { oportunidad_id } = req.params;
    const documentos = await Documento.findAll({ where: { oportunidad_id } });
    res.status(200).json(documentos);
  } catch (error) {
    console.error('Error al obtener documentos:', error);
    res.status(500).json({ error: 'Error al obtener documentos' });
  }
};

