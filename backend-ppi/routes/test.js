const express = require("express");
const router = express.Router();

router.get("/test/:id", (req, res) => {
	const { id } = req.params;
	res.json({ in: "test", id });
});

router.post("/test", (req, res) => {
	res.json({ data: req.body });
});

module.exports = router;
