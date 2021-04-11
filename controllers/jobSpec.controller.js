const express = require("express");
const mongoose = require("mongoose");

const JobSpecs = require("../models/jobSpec.model");

const router = express.Router();

const getJobSpecs = async (req, res) => {
  try {
    const jobSpec = await JobSpecs.find();

    res.status(200).json(jobSpec);
  } catch (error) {
    res.status(404).json({ message: error.message });
    console.log("Get Error : ", error);
  }
};


const createJobSpec = async (req, res) => {
  console.log(req.body);
  const {
    jobTitle,
    jobDescription,
    jobRequirements,
    recruiter,
    client,
    datePlaced,
    dateExpire,
  } = req.body;
  const newJobSpec = new JobSpecs({
    jobTitle,
    jobDescription,
    jobRequirements,
    recruiter,
    client,
    datePlaced,
    dateExpire,
  });

  try {
    await newJobSpec.save();
    res.status(201).json(newJobSpec);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

module.exports.getJobSpecs = getJobSpecs;
module.exports.createJobSpecs = createJobSpec;
module.exports.router = router;
