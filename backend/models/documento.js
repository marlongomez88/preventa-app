module.exports = (sequelize, DataTypes) => {
  const Documento = sequelize.define('Documento', {
    nombre_archivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ruta_archivo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    oportunidad_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nota_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });

  Documento.associate = function(models) {
    Documento.belongsTo(models.Oportunidad, {
      foreignKey: 'oportunidad_id',
      as: 'oportunidad'
    });
    Documento.belongsTo(models.Nota, {
      foreignKey: 'nota_id',
      as: 'nota'
    });
  };

  return Documento;
};


