<<<<<<< HEAD
const { Router } = require("express");
const postDogs = Router();
const { postDogsHandler } = require("../handlers/postDogsHandler");
const { validate } = require("../middlewares/validates");

postDogs.post("/dogs", validate, postDogsHandler);

module.exports = postDogs;
=======
const { Router } = require("express");
const postDogs = Router();
const { postDogsHandler } = require("../handlers/postDogsHandler");

postDogs.post("/dogs", postDogsHandler);

module.exports = postDogs;
>>>>>>> 8e75814e0b400ae049e1c40e2a30edafd30f8ce8
