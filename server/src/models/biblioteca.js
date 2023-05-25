const mongoose = require("mongoose");

const bibliotecaSchema = new mongoose.Schema(
{
    ciudad: {type: String, required: true},
    nombre: {type: String, required: true},
    salas: [{type: mongoose.Schema.Types.ObjectId, ref: "Sala"}],
    servicios: [{type: String}]
}
)

const Biblioteca = mongoose.model("Biblioteca", bibliotecaSchema)

module.exports = Biblioteca;