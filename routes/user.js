const express = require("express");
const { register, login } = require("../controller/users");
// const verifyToken = require("../middlewares/verifyToken");
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", register);

// userRouter.get("/profile", verifyToken, getProfile);

module.exports = userRouter;