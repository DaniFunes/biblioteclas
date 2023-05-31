const mongoose = require("mongoose");

const mesaSchema = new mongoose.Schema(
{
    numero: {type: String, required: true},
    reservada: {type: Boolean, required: true, default: false},
    posicion: [String]
}
)

const Mesa = mongoose.model("Mesa", mesaSchema)

module.exports = Mesa;