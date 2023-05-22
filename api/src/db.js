require("dotenv").config();
const { Sequelize } = require("sequelize");
//const fs = require('fs');
//const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const DogsModel = require("./models/dogsDB");
const TemperamentsModel = require("./models/temperamentsDB");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

DogsModel(sequelize);
TemperamentsModel(sequelize);
console.log(sequelize.models);

const { dogs, temperaments } = sequelize.models; //los defino como modelos de sequelize
dogs.belongsToMany(temperaments, { through: "tablaIntermedia" });
temperaments.belongsToMany(dogs, { through: "tablaIntermedia" });

module.exports = { sequelize, ...sequelize.models };
