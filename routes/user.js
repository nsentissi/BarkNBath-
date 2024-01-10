const express = require("express");
const { register, login, logout , getProfile, updateUser} = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", register);
userRouter.get("/logout", logout)
userRouter.get("/profile", verifyToken, getProfile);
userRouter.put("/updateUser", verifyToken, updateUser)

module.exports = userRouter;