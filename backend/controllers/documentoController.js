// controllers/documentoController.js

const fs = require('fs');
const path = require('path');
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

exports.obtenerDocumentosPorNota = async (req, res) => {
  try {
    const { nota_id } = req.params;
    const documentos = await Documento.findAll({ where: { nota_id } });
    res.status(200).json(documentos);
  } catch (error) {
    console.error('Error al obtener documentos por nota:', error);
    res.status(500).json({ error: 'Error al obtener documentos por nota' });
  }
};


exports.eliminarDocumento = async (req, res) => {
  try {
    const { id } = req.params;
    const documento = await Documento.findByPk(id);

    if (!documento) {
      return res.status(404).json({ error: 'Documento no encontrado' });
    }

    // Eliminar archivo físico
    const rutaFisica = path.join(__dirname, '..', documento.ruta_archivo);
    if (fs.existsSync(rutaFisica)) {
      fs.unlinkSync(rutaFisica);
    }

    // Eliminar de la base de datos
    await documento.destroy();

    res.status(200).json({ mensaje: 'Documento eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar documento:', error);
    res.status(500).json({ error: 'Error al eliminar documento' });
  }
};
