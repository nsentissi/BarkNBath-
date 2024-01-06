const express = require("express");
const {createAppointment, getAppointments } = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


appointmentRouter.post("/create", verifyToken , createAppointment);
appointmentRouter.get('/', verifyToken, getAppointments)


module.exports = appointmentRouter