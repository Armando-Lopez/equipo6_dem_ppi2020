const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require('cors')


const ajustes = require("./routes/ajustes");
const registro = require("./routes/registro");
const contrasena = require("./routes/contrasena");
const familiaviv = require("./routes/familia-y-vivienda");

// Ajustes
app.set("port", process.env.PORT || 3002);

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

//configura para resivir las peticiones desde otras aplicaciones, el tipo de datos (JSON)
app.use((req, res, next ) => {
	res.setHeader("Access-Control-Allow-Headers","X-Requested-With, content-type");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use("/", ajustes);
// app.use("/api", registro);
// app.use("/api", contrasena);
// app.use("/api", familiaviv);

// Ajustes del servidor
app.listen(app.get("port"), () => {
	console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
