
const express = require('express');
const router = express.Router();
const documentoController = require('../controllers/documentoController');

router.get('/oportunidad/:oportunidad_id', documentoController.obtenerDocumentosPorOportunidad);
router.get('/nota/:nota_id', documentoController.obtenerDocumentosPorNota);
router.delete('/:id', documentoController.eliminarDocumento);

module.exports = router;

