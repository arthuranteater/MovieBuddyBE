const express = require("express");
const router = express.Router();
const queries = require("../queries");

router.get("/:id", (req, res) => {
  queries.getQuote(req.params.id).then(result => res.json({ result }));
});

module.exports = router;
