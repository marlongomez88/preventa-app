const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunityController');

router.post('/', opportunityController.crearOportunidad);
router.get('/', opportunityController.obtenerOportunidades);

module.exports = router;