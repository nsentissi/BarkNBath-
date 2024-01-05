const { Schema, model } = require("mongoose");

const petSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'User' }, 
  name: { type: String, required: true },
  breed: { type: String, required: true },
  age: { type: Number, required: true },
  weight: { type: Number, required: true },
  appointments: [{ type: Schema.Types.ObjectId, ref: "Appointment" }],
  Bio: { type: String, required: true },
  profilePhoto: { type: Buffer },
});

const Pet = model("Pet", petSchema);

module.exports = Pet;
