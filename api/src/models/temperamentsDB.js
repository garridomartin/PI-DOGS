const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Temperaments",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
    },
    { timestamps: false }
  );
};
