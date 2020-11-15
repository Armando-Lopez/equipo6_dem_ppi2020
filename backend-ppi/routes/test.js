const express = require("express");
const router = express.Router();

router.get("/:ajustes/:id?", (req, res) => {
	const { path, id } = req.params;
	console.log(path);
	res.json({ path, id });
});

module.exports = router