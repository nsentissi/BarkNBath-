const express = require("express");
const {createAppointment, getAppointments, getPetAppointmentById, getAllAppointments } = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


appointmentRouter.post("/create", verifyToken , createAppointment);
appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/all', verifyToken , getAllAppointments )
appointmentRouter.get('/:petId', verifyToken, getPetAppointmentById )



module.exports = appointmentRouter