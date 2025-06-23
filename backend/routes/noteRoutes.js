
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

router.get('/:opportunityId', noteController.getByOpportunity);
router.post('/:opportunityId', noteController.create);

module.exports = router;
