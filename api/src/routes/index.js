const { Router } = require("express");
const mainRouter = Router();
const getDogs = require("./getDogs");
const getDogsById = require("./getDogsById");
const getTemperaments = require("./getTemperaments");
const postDogs = require("./postDogs");

mainRouter.get("/", (req, res) => {
  res.status(200).send("PAGINA DE INICIO");
});
mainRouter.get("/dogs", getDogs);
mainRouter.get("/dogs/:iddogs", getDogsById);
mainRouter.get("/temperaments", getTemperaments);
mainRouter.post("/dogs", postDogs);

module.exports = mainRouter;
