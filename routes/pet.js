const express = require("express");
const {createPet, getPetName} = require("../controllers/pet");
const petRouter = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const upload = require('../middlewares/cloudinaryConfig');


petRouter.post("/create", upload.single('profilePhoto') , verifyToken , createPet);
petRouter.get("/details", verifyToken, getPetName)


module.exports = petRouter