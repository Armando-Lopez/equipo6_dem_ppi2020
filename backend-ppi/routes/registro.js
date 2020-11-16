const express = require("express");
const router = express.Router();

const mysqlConnection = require("../db/db");

// Crear nueva cuenta
router.post("/registro", (req, res) => {
  const { documento, nombre, email, contrasena } = req.body;
  res.json({ data: req.body });

  res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
  res.setHeader("Content-Type", "application/json;charset=utf-8");

  // mysqlConnection.query(
  //   `INSERT INTO Usuario(Documento, Nombre, Email, Contrasena) VALUES(${documento}, ${nombre}, ${email}, ${contrasena})`,
  //   (err, results, fields) => {
  //     if (err) {
  //       return console.error(err.message);
  //     }
  //     res.json({ message: `¡Cuenta creada!` });
  //   }
  // );
});

module.exports = router;
