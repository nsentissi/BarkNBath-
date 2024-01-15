const express = require("express");
const {
  createAppointment,
  getAppointments,
  getPetAppointmentById,
  getAllAppointments,
  deleteAppointment,
} = require("../controllers/appointments");
const appointmentRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const authorize = require("../middlewares/authorize");

appointmentRouter.post("/create", verifyToken, createAppointment);
appointmentRouter.get("/", getAppointments);
appointmentRouter.get(
  "/all",
  verifyToken,
  authorize("admin"),
  getAllAppointments
);
appointmentRouter.delete(
  "/delete/:appointmentId",
  verifyToken,
  deleteAppointment
);
appointmentRouter.get("/:petId", verifyToken, getPetAppointmentById);

module.exports = appointmentRouter;
