const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const asyncErrors = require("express-async-errors");

const User = require("../models/user");

// REGISTRA A UN CLIENTE
router.post("/users/signup", body("username").isString(), async (req, res) => {
  const { password: passwordPlainText, ...rest } = req.body;

  const { errors } = validationResult(req);
  console.log(errors);

  if (errors.length)
    return res.status(400).send("Los datos recibidos son invalidos");

  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(passwordPlainText, salt);

  const newUser = await User.create({
    password,
    ...rest
  })

  const token = newUser.generateJWT();

  res.setHeader("x-auth-token", token);
  res.json(newUser);
});

// LOGUEA A UN CLIENTE
router.post("/users/signin", async (req, res) => {
  const { password, username } = req.body;

  const user = await User.findOne({ username });

  const isUser = await bcrypt.compare(password, user.password);

  const token = user.generateJWT();

  res.setHeader("x-auth-token", token);
  res.json("Success");
});

module.exports = router;