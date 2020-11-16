const express = require("express");
const router = express.Router();

router.get("/test/:id", (req, res) => {
	const { id } = req.params;
	res.json({ in: "test", id });
});

router.post("/test", (req, res) => {
	setTimeout(() => {
		res.json({ data: req.body });
	}, 3000);
});

module.exports = router;
