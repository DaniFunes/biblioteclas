const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Sala = require("../models/sala");
const Biblioteca = require("../models/biblioteca");


// CONSIGUE LAS SALAS DE UNA BIBLIOTECA 
router.get("/:idBiblioteca/salas", async (req, res) => {
  const idBiblioteca = req.params.idBiblioteca;
  const salas = await Biblioteca.findById(idBiblioteca).populate({ path: "salas", select: "nombre" })
  res.json(salas);
});


// // CREA UNA SALA NUEVA 
// router.post("/salas" , async (req, res) => {
//     const salas = req.body;
//     const newSala = await Sala.create(salas)
//     res.json(newSala)
// } )



module.exports = router;
