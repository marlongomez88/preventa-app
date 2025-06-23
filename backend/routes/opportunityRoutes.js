
const express = require('express');
const router = express.Router();
const opportunityController = require('../controllers/opportunityController');

router.get('/', opportunityController.getAll);
router.post('/', opportunityController.create);

module.exports = router;
