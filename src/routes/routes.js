const express = require("express");
const router = express.Router();
const controller = require('../controller/controller');

router.get("/scrape", controller.scrape);

router.all("/*", function (req, res) {
  res.status(400).send({status: false,message: "The api you request is not available"})
});

module.exports = router;