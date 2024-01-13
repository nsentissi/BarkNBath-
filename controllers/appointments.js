const Appointment = require("../models/appointment");

const createAppointment = async (req, res, next) => {
  try {
    const userId = req.user.id;

    const { date, time, service, lastGroom, address, pet } = req.body;
    const newAppointment = new Appointment({
      owner: userId,
      date,
      time,
      service,
      lastGroom,
      address,
      pet,
    });
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    const date = req.query.date;

    if (!date) {
      const appointments = await Appointment.find();

      return res.status(200).json(appointments);
    }

    const appointments = await Appointment.find({ date });

    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPetAppointmentById = async (req, res) => {
  try {
    const { petId } = req.params;
    const appointments = await Appointment.find({ pet: petId });
    res.json(appointments);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate({
        path: "owner",
        match: { isActive: true },
        select: "firstName lastName",
      })
      .populate("pet", "name");

    const validAppointments = appointments.filter(
      (appointment) => appointment.owner
    );

    res.json(validAppointments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAppointment = async (req, res) => {
  try {
    const { appointmentId } = req.params;

    const appointment = await Appointment.findByIdAndDelete(appointmentId);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }
    res.status(200).json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
  getPetAppointmentById,
  getAllAppointments,
  deleteAppointment,
};
