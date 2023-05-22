const { Router } = require("express");
const getTemperaments = Router();

const { getTemperamentsHandler } = require("../handlers/getDogsHandler");

getTemperaments.get("/temperaments", getTemperamentsHandler);

module.exports = getTemperaments;
