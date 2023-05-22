const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dogs",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      altura: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      peso: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      expectativaDeVida: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagen: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );
};
