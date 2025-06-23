const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Crear una nota para una oportunidad
router.post('/:oportunidad_id', noteController.crearNota);

// Obtener todas las notas de una oportunidad
router.get('/:oportunidad_id', noteController.obtenerNotasPorOportunidad);

module.exports = router;