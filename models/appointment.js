const { Schema, model } = require("mongoose");

const appointmentSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User", required: true },
  pet_id: { type: Schema.Types.ObjectId, ref: "User.pets", required: true },
  date: { type: Date, required: true },
  time: { type: Date, required: true },
  service: { type: String, required: true },
  lastGroom: { type: Date },
  address: {type: String, required: true},
  /* feedback: feedbackSchema, */
});

const Appointment = model("Appointment", appointmentSchema);

module.exports = Appointment;
