const express = require("express");
const {createAppointment, getAppointments, getPetAppointmentById } = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


appointmentRouter.post("/create", verifyToken , createAppointment);
appointmentRouter.get('/', verifyToken, getAppointments);
appointmentRouter.get('/:petId', verifyToken, getPetAppointmentById )


module.exports = appointmentRouter