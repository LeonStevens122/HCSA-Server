const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSpec = {
  jobTitle: {
    type: String,
    // required: true,
  },
  jobDescription: {
    type: String,
    // required: true,
  },
  jobRequirements: {
    type: Array,
    // required: true,
  },
  recruiter: {
    type: String,
    //  required: true,
  },
  client: {
    type: String,
    //  required: true,
  },
  location: {
    type: String,
    //  required: true,
  },
  datePlaced: {
    type: Date,
    default: Date.now,
  },
  dateExpire: {
    type: Date,
  },
};

const JobSpecSchema = new Schema(JobSpec);

module.exports = mongoose.model("JobSpecs", JobSpecSchema);
