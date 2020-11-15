const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => {
	// const { path, id } = req.params;
	res.json({ in:"test" });
});

module.exports = router;
