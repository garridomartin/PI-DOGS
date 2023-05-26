<<<<<<< HEAD
const { getAllDogs } = require("../controllers/getAllDogs");
const { getDogsByIdRaza } = require("../controllers/getDogsByIdRaza");
const { searchDogsByName } = require("../controllers/searchDogsByName");

const getDogsHandler = async (req, res) => {
  const { name } = req.query; //name es la raza de un perro que desee buscar por query
  const results = name ? await searchDogsByName(name) : await getAllDogs();
  if (results.length > 0) {
    res.status(200).json(results);
  } else {
    res.status(404).send("No se encontraron perros con ese nombre");
  }
};
//LLAMAR A LA FUNCION que obtiene los datos de la bdd
//llamar a la funcion que obtiene los datos del a api externa
//unir los datos unificando el formato
//cuando tenga los datos, responder

const getDogsByIdHandler = async (req, res) => {
  const { idRaza } = req.params;
  const source = isNaN(idRaza) ? "bdd" : "api";
  try {
    const dogs = await getDogsByIdRaza(idRaza, source);
    res.status(200).json(dogs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  //res.send(`NIY: estoy en posts detail by ${idRaza}`);
};

const getTemperamentsHandler = (req, res) => {
  res.send(`NIY: estoy en posts temperaments`);
};

module.exports = {
  getDogsHandler,
  getDogsByIdHandler,
  getTemperamentsHandler,
};
=======
const getDogsHandler = (req, res) => {
  const { name } = req.query; //name es la raza de un perro que desee buscar por query
  if (name)
    res.send(
      `quiero llamar a la funcion que busca a los que se llaman ${name}`
    );
  //si se define el query...
  else res.send(`vienen todos los perros`);

  //LLAMAR A LA FUNCION que obtiene los datos de la bdd
  //llamar a la funcion que obtiene los datos del a api externa
  //unir los datos unificando el formato
  //cuando tenga los datos, responder
};

const getDogsByIdHandler = (req, res) => {
  const { id } = req.params;
  res.send(`NIY: estoy en posts detail by ${id}`);
};

const getTemperamentsHandler = (req, res) => {
  res.send(`NIY: estoy en posts temperaments`);
};

module.exports = {
  getDogsHandler,
  getDogsByIdHandler,
  getTemperamentsHandler,
};
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8
