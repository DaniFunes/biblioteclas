const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { pick } = require("lodash");


const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  reservas: [{ type: mongoose.Schema.Types.ObjectId, ref: "Reserva" }],
  isAdmin: { type: Boolean, required: true },
  nombre: { type: String },
  apellidos: { type: String },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    pick(this, ["username", "isAdmin"]),
    process.env["jwt_privateKey"]
  );
};

const User = mongoose.model("User", userSchema);

module.exports = User;