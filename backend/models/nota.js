module.exports = (sequelize, DataTypes) => {
  const Nota = sequelize.define('Nota', {
    contenido: DataTypes.TEXT,
    recordatorio_fecha: DataTypes.DATE,
    recordatorio_email: DataTypes.BOOLEAN,
    recordatorio_whatsapp: DataTypes.BOOLEAN,
  }, {
    tableName: 'notas',
    timestamps: true,
  });

  return Nota;
};

