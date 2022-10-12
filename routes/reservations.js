const express = require("express");
const router = express.Router();
const requireAuth = require("../middleware/requireAuth");
const {
  createReservation,
  getAllReservations,
  deleteReservation,
  updateReservation,
} = require("../controllers/reservationController");

router.use(requireAuth);

router.post("/makereservation", createReservation);

router.get("/getreservations", getAllReservations);

router.delete("/delete/:id", deleteReservation);

router.patch("/update/:id", updateReservation);

module.exports = router;
