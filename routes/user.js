const express = require("express");
const { register, login, logout , getProfile, updateUser, getAllUsers} = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", register);
userRouter.get("/logout", verifyToken, logout);
userRouter.get("/profile", verifyToken, getProfile);
userRouter.put("/updateUser", verifyToken, updateUser);
userRouter.get("/all", verifyToken, getAllUsers )

module.exports = userRouter;