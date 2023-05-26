const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;
const { dogs } = require("../db");
const cleanArray = require("./cleanArray");

const getDogsByIdRaza = async (idRaza, source) => {
  const dog =
    source === "api"
      ? cleanArray([
          await (
            await axios.get(`${URL_BASE}/${idRaza}?api_key=${API_KEY}`)
          ).data,
        ])
      : await dogs.findByPk(idRaza);

  return dog;
};

module.exports = { getDogsByIdRaza };
