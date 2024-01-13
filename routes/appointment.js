const express = require("express");
const {createAppointment, getAppointments, getPetAppointmentById, getAllAppointments, deleteAppointment } = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


appointmentRouter.post("/create", verifyToken , createAppointment);
appointmentRouter.get('/', getAppointments);
appointmentRouter.get('/all', verifyToken , getAllAppointments )
appointmentRouter.delete('/delete/:appointmentId', verifyToken, deleteAppointment )
appointmentRouter.get('/:petId', verifyToken, getPetAppointmentById )




module.exports = appointmentRouter