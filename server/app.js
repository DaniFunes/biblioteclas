const express = require ("express")
require("dotenv").config()

const app = express();

require("./src/startup/bd")()
require("./src/startup/routes")(app)

const port = process.env.PORT || 3001;

app.use(express.static("public"));

app.listen(port, () => console.log("server on" + port))

module.export = app;