<<<<<<< HEAD
const { DataTypes, BOOLEAN } = require("sequelize");
=======
const { DataTypes } = require("sequelize");
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8

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
<<<<<<< HEAD
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
        allowNull: false,
        validate: {
          isUrl: true,
        },
      },
      created: { type: DataTypes.BOOLEAN, defaultValue: true },
=======
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
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8
    },
    { timestamps: false }
  );
};
