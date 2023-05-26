const { Router } = require("express");
const mainRouter = Router();
<<<<<<< HEAD
const getRouter = require("./getRouter");
=======
const getDogs = require("./getDogs");
const getDogsById = require("./getDogsById");
const getTemperaments = require("./getTemperaments");
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8
const postDogs = require("./postDogs");

mainRouter.get("/", (req, res) => {
  res.status(200).send("PAGINA DE INICIO");
});
<<<<<<< HEAD
mainRouter.use(getRouter);
=======
mainRouter.get("/dogs", getDogs);
mainRouter.get("/dogs/:iddogs", getDogsById);
mainRouter.get("/temperaments", getTemperaments);
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8
mainRouter.post("/dogs", postDogs);

module.exports = mainRouter;
