const express = require("express");
const {createPet, getPetName} = require("../controllers/pet");
const petRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


petRouter.post("/create", verifyToken , createPet);
petRouter.get("/details", verifyToken, getPetName)


module.exports = petRouter