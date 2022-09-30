const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserModel = require("./models/Users");
const cors = require("cors");
require('dotenv').config();

app.use(cors());
app.use(express.json());
try {
  mongoose.connect(
    "mongodb+srv://ipaidimarla:gaiN4JGYDrQoeJyZ@cluster0.ztfxk8r.mongodb.net/reserve-bbq-area",
    { useNewUrlParser: true }
  );
} catch (error) {
  console.log(error);
  console.log("connection failed");
}

app.post("/makereservation", async (req, res) => {
  const { name, unit, date, timeFrom, timeTo } = req.body;
  const user = new UserModel({
    name,
    unit,
    date,
    timeFrom,
    timeTo,
  });
  await user.save();
  res.send("Successfully reserved your place");
});

app.get("/getreservations", async (req, res) => {
  UserModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await UserModel.findByIdAndRemove(id).exec();
  res.send("reservation deleted successfully");
});

app.listen(process.env.PORT|| 3001, () => {
  console.log("connected");
});
