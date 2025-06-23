const fs = require('fs');
const path = require('path');
const { Sequelize, DataTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'preventa',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false,
  }
);

const db = {};

// Cargar todos los modelos
fs.readdirSync(__dirname)
  .filter(file => file !== basename && file.endsWith('.js'))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

// Asociaciones
const { Oportunidad, Nota, Documento } = db;

if (Oportunidad && Nota) {
  Nota.belongsTo(Oportunidad, { foreignKey: 'oportunidad_id' });
  Oportunidad.hasMany(Nota, { foreignKey: 'oportunidad_id' });
}

if (Documento) {
  if (Oportunidad) {
    Documento.belongsTo(Oportunidad, { foreignKey: 'oportunidad_id', as: 'oportunidad' });
    Oportunidad.hasMany(Documento, { foreignKey: 'oportunidad_id', as: 'documentos' });
  }
  if (Nota) {
    Documento.belongsTo(Nota, { foreignKey: 'nota_id', as: 'nota' });
    Nota.hasMany(Documento, { foreignKey: 'nota_id', as: 'documentos' });
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
