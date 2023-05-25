const mongoose = require("mongoose");

const userSchema = new mongoose.Schema (
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        reservas: [{type: mongoose.Schema.Types.ObjectId, ref: "Reserva" }],
        isAdmin: Boolean,
        nombre: {type: String},
        apellidos: {type: String}        
    }
)
const User = mongoose.model("User", userSchema)

module.export = User;