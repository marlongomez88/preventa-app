
const express = require('express');
const cors = require('cors');
const app = express();
const opportunityRoutes = require('./routes/opportunityRoutes');
const noteRoutes = require('./routes/noteRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const documentoRoutes = require('./routes/documentoRoutes');

app.use(cors());
app.use(express.json());
app.use('/api/oportunidades', opportunityRoutes);
app.use('/api/notas', noteRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/uploads', express.static('uploads')); // Para servir archivos estáticos
app.use('/api/documentos', documentoRoutes);

module.exports = app;
