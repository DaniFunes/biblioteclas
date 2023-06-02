const mongoose = require("mongoose")

module.exports = async () => {mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Me he conectado a la base de datos"))
    .catch((err) => console.log("no me he conectadoa  la base de datos" + err))
}   
