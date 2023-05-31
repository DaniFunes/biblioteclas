const mongoose = require("mongoose");

const reservaSchema = new mongoose.Schema({
  biblioteca: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Biblioteca",
    required: true,
  },
  dia: { type: Date },
  sala: { type: mongoose.Schema.Types.ObjectId, ref: "Sala", required: true },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  mesa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mesa",
    required: true,
  }
});

const Reserva = mongoose.model("Reserva", reservaSchema);

module.exports = Reserva;
