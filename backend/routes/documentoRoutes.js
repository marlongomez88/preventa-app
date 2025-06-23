
const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documentoController');

router.get('/oportunidad/:oportunidad_id', documentoController.obtenerDocumentosPorOportunidad);

module.exports = router;

