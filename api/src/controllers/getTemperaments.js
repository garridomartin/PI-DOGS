const { temperaments } = require("../db");
const axios = require("axios");
const { API_KEY, URL_BASE } = process.env;

const getTemperaments = async () => {
  try {
    const temperamentsApi = (await axios.get(`${URL_BASE}?api_key=${API_KEY}`))
      .data;
    const allTemperaments = await getUniqueTemperaments(temperamentsApi);
    return allTemperaments;
  } catch (error) {
    console.error(error);
    throw new Error("Error retrieving temperaments");
  }
};

async function extractTemperaments(apiDogs) {
  const temperamentos = apiDogs.map((apiDog) => apiDog.temperament);
  const allTemperaments = temperamentos
    .join()
    .replace(" ", "")
    .split(",")
    .filter((elemento, indice, arr) => arr.indexOf(elemento.trim()) === indice)
    .sort((a, b) => a.localeCompare(b));
  return allTemperaments;
}

async function getUniqueTemperaments(apiDogs) {
  const allTemperaments = [];
  const temperamentsToCreate = await extractTemperaments(apiDogs);
  for (const breed of temperamentsToCreate) {
    if (breed !== undefined && breed !== "") {
      const viewExist = await temperaments.findOne({ where: { name: breed } });
      viewExist
        ? allTemperaments.push(viewExist)
        : allTemperaments.push(await temperaments.create({ name: breed }));
    }
  }
  return allTemperaments;
}

module.exports = {
  getTemperaments,
};
