const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");
// const ajustes = require("./routes/ajustes");
// const registro = require("./routes/registro");
// const contrasena = require("./routes/contrasena");
// const familiaviv = require("./routes/familia-y-vivienda");

// Ajustes
app.set("port", process.env.PORT || 3002);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(morgan("dev"));

//configura para resivir las peticiones desde otras aplicaciones, el tipo de datos (JSON)
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Request-Width, Content-Type, Accept, Authorization"
// 	);

//   res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
// 	if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE");
//     return res.status(200).json({})
// 	}
// 	res.header("Content-Type", "application/json;charset=utf-8");
// 	next();
// });

app.use(require("./routes/test"));

app.post("/registro", (req, res) => {
	const { documento, nombre, email, contrasena } = req.body;
	res.json({ data: req.body });
});
// app.get("/:path/:id", (req, res) => {
// 	const { path, id } = req.params;
// 	console.log(path)
// 	res.json({ path, id });
// });
// app.get("/api", (req, res) => {
// 	res.json({ path: "api" });
// });
// app.use("/api", contrasena);
// app.use("/api", familiaviv);

// Ajustes del servidor
app.listen(app.get("port"), () => {
	console.log(`Servidor corriendo en el puerto ${app.get("port")}`);
});
