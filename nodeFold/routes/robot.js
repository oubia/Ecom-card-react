const express = require("express");
const router = express.Router();
const data = require("../data"); //to create separet routers

router.get("/", (req, res) => {
  res.json(data);
});
router.get("/:pk", (req, res) => {
  console.log(data[req.params.pk - 1]);
  res.json(data[req.params.pk - 1]);
});
module.exports = router;
