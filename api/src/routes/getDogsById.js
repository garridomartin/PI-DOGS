const { Router } = require("express");
const getDogsById = Router();

const { getDogsByIdHandler } = require("../handlers/getDogsHandler");

getDogsById.get("/dogs/:id", getDogsByIdHandler);

module.exports = getDogsById;
