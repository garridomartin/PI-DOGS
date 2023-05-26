const { Router } = require("express");
const postDogs = Router();
const { postDogsHandler } = require("../handlers/postDogsHandler");
const { validate } = require("../middlewares/validates");

postDogs.post("/dogs", validate, postDogsHandler);

module.exports = postDogs;
