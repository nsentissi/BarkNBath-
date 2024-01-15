const { Schema, model } = require("mongoose");
const Pet = require("./pet.js");

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }],
  role: { type: String, enum: ["user", "admin"], default: "user" },
  isActive: { type: Boolean, default: true },
});

const User = model("User", userSchema);

module.exports = User;
