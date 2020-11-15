const express = require("express");
const router = express.Router();

router.get("/test/:id?", (req, res) => {
	const { id } = req.params;
	res.json({ Heelo: "roel", id });
});

module.exports = router;
