const express = require('express');
const multer = require('multer');
const path = require('path');
const { Documento } = require('../models');

const router = express.Router();

// Configuración del almacenamiento
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Ruta para subir archivo y asociarlo a una oportunidad
router.post('/:oportunidad_id', upload.single('archivo'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se subió ningún archivo' });
    }

    const nuevoDocumento = await Documento.create({
      nombre_archivo: req.file.originalname,
      ruta_archivo: `/uploads/${req.file.filename}`,
      tipo: req.file.mimetype,
      oportunidad_id: req.params.oportunidad_id
    });

    res.status(200).json({
      mensaje: 'Archivo subido y registrado correctamente',
      documento: nuevoDocumento
    });
  } catch (error) {
    console.error('Error al guardar documento:', error);
    res.status(500).json({ error: 'Error al guardar documento' });
  }
});

// Subir archivo asociado a una nota
router.post('/nota/:nota_id', upload.single('archivo'), async (req, res) => {
  try {
    const { nota_id } = req.params;

    if (!req.file) {
      return res.status(400).json({ error: 'No se subió ningún archivo' });
    }

    const nuevoDocumento = await Documento.create({
      nombre_archivo: req.file.originalname,
      ruta_archivo: `/uploads/${req.file.filename}`,
      tipo: req.file.mimetype,
      nota_id
    });

    res.status(200).json({
      mensaje: 'Archivo subido y registrado correctamente',
      documento: nuevoDocumento
    });
  } catch (error) {
    console.error('Error al subir archivo para nota:', error);
    res.status(500).json({ error: 'Error al subir archivo para nota' });
  }
});


module.exports = router;

