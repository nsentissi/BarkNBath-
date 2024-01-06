const express = require("express");
const {createPet} = require("../controllers/pet");
const petRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");


petRouter.post("/create", verifyToken , createPet);


module.exports = petRouter