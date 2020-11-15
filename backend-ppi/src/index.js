const express = require("express");
const app = express();
const morgan = require("morgan");
// const ajustes = require("../routes/ajustes");
// const registro = require("../routes/registro");
// const contrasena = require("../routes/contrasena");
// const familiaviv = require("../routes/familia-y-vivienda");

// Ajustes
app.set("port", process.env.PORT || 3002);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

// Routes //
app.use("/", (req,res)=>{
  // console.log(req);
  res.send("Hola cucho")
});

// app.use("/api", ajustes);
// app.use("/api", registro);
// app.use("/api", contrasena);
// app.use("/api", familiaviv);

// Ajustes del servidor
app.listen(app.get("port"), () => {
	console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
