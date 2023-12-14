const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  appointments: [appointmentSchema],
  Bio: { type: String, required: true },
  profilePhoto: { type: Buffer },
  photos: [photosSchema],
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
