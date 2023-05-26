const { dogs } = require("../db");

const createDog = async (
  ID,
  name,
  altura,
  peso,
  expectativaDeVida,
  temperamento,
  imagen,
  created
) => {
  const newDog = await dogs.create({
    ID,
    name,
    altura,
    peso,
    expectativaDeVida,
    temperamento,
    imagen,
    created,
  });
  return newDog;
};

module.exports = { createDog };
