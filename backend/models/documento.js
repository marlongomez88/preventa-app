module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('Documento', {
    nombre_archivo: DataTypes.STRING,
    ruta_archivo: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    tableName: 'documentos',
    timestamps: true
  });

  return Documento;
};


