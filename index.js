const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const reservationsRoutes = require("./routes/reservations");
const userRoutes = require("./routes/user");

app.use(cors());

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/reservations", reservationsRoutes);
app.use("/api/user", userRoutes);

// connect to db

mongoose
  .connect(process.env.DEV_URI, { useNewUrlParser: true })
  .then(() => {
    app.listen(process.env.PORT || 3001, () => {
      console.log("connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });
