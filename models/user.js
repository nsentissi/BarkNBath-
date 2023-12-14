const { Schema, model } = require("mongoose");
const Pet = require("./pet.js");  


const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pets: [Pet.schema],
});

const User = model("User", userSchema);

module.exports = User;
