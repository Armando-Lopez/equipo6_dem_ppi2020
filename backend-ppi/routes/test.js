const express = require("express");
const router = express.Router();

router.get("/test/:data", (req, res) => {
	res.json({ data: req.params });
});

router.post("/test", (req, res) => {
	res.json({ data: req.body });
});

router.post("/test", (req, res) => {
	res.json({ data: req.body });
});

module.exports = router;
