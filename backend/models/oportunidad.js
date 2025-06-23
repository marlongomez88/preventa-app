module.exports = (sequelize, DataTypes) => {
  const Oportunidad = sequelize.define('Oportunidad', {
    empresa_cliente: DataTypes.STRING,
    contacto: DataTypes.STRING,
    numero_oportunidad: DataTypes.STRING,
    gerente_cuenta: DataTypes.STRING,
    estado: DataTypes.STRING,
  }, {
    tableName: 'oportunidades',
    timestamps: true,
  });

  return Oportunidad;
};
