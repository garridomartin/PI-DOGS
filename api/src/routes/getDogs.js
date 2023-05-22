const { Router } = require("express");
const getDogs = Router();

const { getDogsHandler } = require("../handlers/getDogsHandler");

getDogs.get("/dogs", getDogsHandler);

module.exports = getDogs;
