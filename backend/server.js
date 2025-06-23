
const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

const { sequelize } = require('./models');

sequelize.sync({ alter: true }).then(() => {
  console.log('Base de datos sincronizada');
});
