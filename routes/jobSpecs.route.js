const express = require("express");
const router = express.Router();
const getJobSpecs = require("../controllers/jobSpec.controller");
const createJobSpecs = require("../controllers/jobSpec.controller");

router.get("/", getJobSpecs.getJobSpecs);
router.post("/", createJobSpecs.createJobSpecs);

module.exports = router;
