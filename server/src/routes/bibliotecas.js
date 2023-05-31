const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const _ = require("lodash");

const Biblioteca = require("../models/biblioteca");

//CONSIGUE LAS BIBLIOTECAS FILTRADAS POR CIUDAD
router.get("/bibliotecas/search", async (req, res) => {
  let { ciudad } = req.query;
  if (!ciudad) return res.status(400).send("No ingresaste ciudad");

  const bibliotecas = await Biblioteca.find({
    ciudad: { $regex: ciudad, $options: "i" },
  }).exec();

  if (_.isEmpty(bibliotecas))
    return res.status(404).send("No hay bibliotecas en esta ciudad");

  res.json(bibliotecas);
});

//CONSIGUE TODAS LAS BIBLIOTECAS
router.get("/bibliotecas", async (req, res) => {
  throw "Error";
  const bibliotecas = await Biblioteca.find().exec();
  res.json(bibliotecas);
});

// AÑADE UNA BIBLIOTECA
router.post("/bibliotecas", async (req, res) => {
  const bibliotecas = req.body;
  const newBiblioteca = await Biblioteca.create(bibliotecas);
  res.json(newBiblioteca);
});

//ACTUALIZA LOS DATOS DE UNA BIBLIOTECA
router.put("/bibliotecas/updatebiblio", async (req, res) => {
  const { idBiblioteca, ...rest } = req.body;

  const bibliotecaDetails = { ...rest };

  const updatedBiblioteca = await Biblioteca.findByIdAndUpdate(
    idBiblioteca,
    bibliotecaDetails,
    {
      new: true,
    }
  );
  res.json(updatedBiblioteca);
});

//AÑADE UNA SALA A UNA BIBLIOTECA
router.put("/bibliotecas/addsala", async (req, res) => {
  const { idBiblioteca, idSala } = req.body;
  if (!idSala || !idBiblioteca)
    return res.status(400).send("No se establecen parámetros");

  const updatedBiblioteca = await Biblioteca.findByIdAndUpdate(
    idBiblioteca,
    { $push: { salas: idSala } },
    {
      new: true,
    }
  );
  res.json(updatedBiblioteca);
});

// BORRA UNA BIBLIOTECA
router.delete("/bibliotecas/delete", async (req, res) => {
  const { idBiblioteca } = req.body;
  if (!idBiblioteca)
    return res.status(404).send("No hay parámetro para borrar");
  const bibliotecaDeleted = await Biblioteca.findByIdAndDelete(idBiblioteca);
  if (!bibliotecaDeleted)
    return res.status(400).send("Biblioteca no encontrada");
  res.json(bibliotecaDeleted);
});

module.exports = router;
