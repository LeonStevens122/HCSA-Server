const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const dotenv = require("dotenv");

const jobSpecRoute = require("./routes/jobSpecs.route");

dotenv.config();
const mongoUser = process.env.HCSAUSER;
const mongoPassword = process.env.HCSASPASS;

const mongooseURI =
  "mongodb+srv://" +
  mongoUser +
  ":" +
  mongoPassword +
  "@hcsa.rrejm.mongodb.net/JobSpecs?authSource=admin&replicaSet=atlas-4gcoww-shard-0&readPreference=secondary&appname=MongoDB%20Compass&ssl=true";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

app.use("/JobSpec", jobSpecRoute);
app.get("/", (req, res) => {
  res.send("Hello to HCSA API");
});

mongoose
  .connect(mongooseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log("server running on port: ", PORT, "Connected to MongoDB ! ")
    )
  )
  .catch((error) => console.log("Server Error : ", error.message));

mongoose.set("useFindAndModify", false);
