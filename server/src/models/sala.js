const mongoose = require("mongoose");

const salaSchema = new mongoose.Schema(
{
    nombre: {type: String, required: true},
    tipo: {type: String},
    mesas: {type: Number, required: true}
}
)

const Sala = mongoose.model("Sala", salaSchema)

module.exports = Sala;