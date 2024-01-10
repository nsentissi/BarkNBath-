const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pet: { type: Schema.Types.ObjectId, ref: "Pet", required: true }, 
  date: { type: Date, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  lastGroom: { type: Date },
  address: {type: String, required: true},
 });

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
