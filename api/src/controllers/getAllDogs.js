const { dogs } = require("../db");
const { temperaments } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;
const cleanArray = require("./cleanArray");

const getAllDogs = async () => {
  const databaseDogs = await dogs.findAll({
    include: {
      model: temperaments,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const apiDogsRaw = (await axios.get(`${URL_BASE}?api_key=${API_KEY}`)).data;
  const apiDogs = cleanArray(apiDogsRaw);

  return [...databaseDogs, ...apiDogs].flat(); //con flat evitono haya arrays anidados y se devuelve el resultado de la función.
};

module.exports = { getAllDogs };
