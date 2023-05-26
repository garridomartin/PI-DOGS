const { dogs } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;
const cleanArray = require("./cleanArray");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const dogsDB = require("../models/dogsDB");

const searchDogsByName = async (name) => {
  const databaseDogs = await dogs.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
  });

  const apiDogsRaw = (await axios.get(`${URL_BASE}?api_key=${API_KEY}`)).data;
  const apiDogs = cleanArray(apiDogsRaw);

  const filteredApi = apiDogs.filter((dog) => {
    const dogName = dog.name.toLowerCase();
    const searchName = name.toLowerCase();
    return dogName.includes(searchName);
  });

  return [...filteredApi, ...databaseDogs];
};

module.exports = { searchDogsByName };
