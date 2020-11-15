const express = require("express");
const router = express.Router();

router.get("/:path/:id", (req, res) => {
	const { path, id } = req.params;
	res.json({ path, id });
});

module.exports = router;
