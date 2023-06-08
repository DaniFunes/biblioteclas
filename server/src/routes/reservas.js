const { Router } = require("express");
const router = Router();
const mongoose = require("mongoose");

const Reserva = require("../models/reserva");
const User = require("../models/user");

const isAuth = require("../middlewares/isAuth");
const isAdmin = require("../middlewares/isAdmin");


router.get("/user/:idUser", isAuth, async (req, res) => {
  const idUser = req.params.idUser
  const reservas = await Reserva.find({ usuario: idUser})
  .populate({path: "sala"})
  .populate({path: "biblioteca"})
  .populate({path: "mesa"})

  res.json(reservas);
});

router.delete("reserva/:idReserva", isAuth, async (req, res) => {
    const reserva = req.body.params;
    const deletedReserva = await Reserva.findByIdAndRemove(reserva)
    res.json(deletedReserva)
} )

module.exports = router;
