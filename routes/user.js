const express = require("express");
const { register, login, logout , getProfile} = require("../controllers/user");
const verifyToken = require("../middlewares/verifyToken");
const userRouter = express.Router();

userRouter.post("/login", login);
userRouter.post("/signup", register);
userRouter.get("/logout", logout)

 userRouter.get("/profile", verifyToken, getProfile  );

module.exports = userRouter;