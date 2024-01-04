const express = require("express");
const {createAppointment} = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


appointmentRouter.post("/create", verifyToken , createAppointment);


module.exports = appointmentRouter