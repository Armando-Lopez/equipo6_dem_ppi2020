const express = require("express");
const router = express.Router();

router.get("/test/:data", (req, res) => {
	res.json({ data: req.params });
});

router.post("/test", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
	res.json({ data: req.body });
});

router.post("/test/:data", (req, res) => {
  let {data} = req.params
	res.json({ data: req.body, params: JSON.parse(data) });
});

module.exports = router;
