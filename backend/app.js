
const express = require('express');
const cors = require('cors');
const app = express();
const opportunityRoutes = require('./routes/opportunityRoutes');
const noteRoutes = require('./routes/noteRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/oportunidades', opportunityRoutes);
app.use('/api/notas', noteRoutes);

module.exports = app;
