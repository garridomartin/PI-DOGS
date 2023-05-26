const { DataTypes, BOOLEAN } = require("sequelize");

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
        type: DataTypes.STRING,
        allowNull: false,
      },
      peso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      expectativaDeVida: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagen: {
        type: DataTypes.STRING,
        /*validate: {
          isUrl: true,
        },*/
        allowNull: false,
      },
      created: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    { timestamps: false }
  );
};
