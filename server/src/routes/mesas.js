const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");
const _ = require("lodash");

const Sala = require("../models/sala");
const Mesa = require("../models/mesa");
const Reserva = require("../models/reserva")
const User = require("../models/user")


// CREA MESAS EN UNA SALA
router.post("mesas/:idSala", async (req, res) => {
  const idSala = req.params.idSala;
  const mesa = req.body;
  const newMesa = await Mesa.create(mesa);

  const updatedSala = await Sala.findByIdAndUpdate(
    idSala,
    { $push: { mesas: newMesa._id } },
    {
      new: true,
    }
  );

  res.json(updatedSala);
});

//CONSIGUE MESAS DISPONIBLES DE UNA SALA

router.get("/mesas/:idSala", async (req, res) => {
  const idSala = req.params.idSala;
  const salaMesasDisponibles = await Sala.findById(idSala).populate({
    path: "mesas",
    match: { reservada: false },
  });

  if (!salaMesasDisponibles.mesas.length)
    return res.status(401).send("No hay mesas disponibles");

  res.json(salaMesasDisponibles);
});

//RESERVA UNA MESA
router.put("mesas/:idBiblioteca/:idSala/:idMesa/:idUser", async (req, res) => {
  const idBiblioteca = req.params.idBiblioteca;
  const idMesa = req.params.idMesa;
  const idUser = req.params.idUser;
  const idSala = req.params.idSala;

  const updatedMesa = await Mesa.findByIdAndUpdate(
    idMesa,
    { reservada: true },
    { new: true }
  );

  const updatedReserva = await Reserva.create({
    biblioteca: idBiblioteca,
    sala: idSala,
    usuario: idUser,
    mesa: idMesa,
  })

  const updatedUsuario  = await User.findByIdAndUpdate(
    idUser, 
    {$push: { reservas: idMesa } }
  )
  res.json(updatedReserva);
});

module.exports = router;
