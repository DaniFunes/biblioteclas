require("express-async-errors");
const { json } = require("express");
const morgan = require("morgan");
const errors = require("../middlewares/errors");

const bibliotecas = require("../routes/bibliotecas.js");
const users = require("../routes/users");
const salas = require("../routes/salas");
const reservas = require("../routes/reservas");
const mesas = require("../routes/mesas");

module.exports = function (app) {
  const apiPath = "/api/biblioteclas";

  app.use(morgan("dev"));
  app.use(json());

  app.use(apiPath, bibliotecas);
  app.use(apiPath, users);
  app.use(apiPath, salas);
  app.use(apiPath, reservas);
  app.use(apiPath, mesas);

  app.use(errors);
};
