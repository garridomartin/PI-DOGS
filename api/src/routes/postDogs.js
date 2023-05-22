const { Router } = require("express");
const postDogs = Router();
const { postDogsHandler } = require("../handlers/postDogsHandler");

postDogs.post("/dogs", postDogsHandler);

module.exports = postDogs;
