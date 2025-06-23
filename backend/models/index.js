const { Sequelize, DataTypes } = require('sequelize');

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

// Importar modelos
const Oportunidad = require('./oportunidad')(sequelize, DataTypes);
const Nota = require('./nota')(sequelize, DataTypes);
const Documento = require('./documento')(sequelize, DataTypes);

// Asociaciones
Nota.belongsTo(Oportunidad, { foreignKey: 'oportunidad_id' });
Oportunidad.hasMany(Nota, { foreignKey: 'oportunidad_id' });

Documento.belongsTo(Oportunidad, { foreignKey: 'oportunidad_id' });
Oportunidad.hasMany(Documento, { foreignKey: 'oportunidad_id' });

module.exports = {
  sequelize,
  Oportunidad,
  Nota,
  Documento
};

