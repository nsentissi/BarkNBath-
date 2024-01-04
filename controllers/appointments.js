const Appointment = require ("../models/appointment")


const createAppointment = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const {date, time, service, lastGroom, address} = req.body
        const newAppointment = new Appointment ({owner: userId, date, time, service, lastGroom, address});
        await newAppointment.save();
        res.status(201).json(newAppointment)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}


module.exports = {
    createAppointment
}