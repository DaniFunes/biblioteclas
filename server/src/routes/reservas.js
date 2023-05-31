const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Reserva = require("../models/reserva");
const User = require("../models/user");


router.get("/user/:idUser", async (req, res) => {
  const idUser = req.params.idUser
  const reservas = await Reserva.find({ usuario: idUser})
  .populate({path: "sala"})
  .populate({path: "biblioteca"})
  .populate({path: "mesa"})

  res.json(reservas);
});

router.delete("reserva/:idReserva" , async (req, res) => {
    const reserva = req.body.params;
    const deletedReserva = await Reserva.findByIdAndRemove(reserva)
    res.json(deletedReserva)
} )

module.exports = router;
