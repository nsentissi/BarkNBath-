const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorResponse = require("../utils/ErrorResponse");

const register = async (req, res, next) => {
    try {
      const {
        body: { email, phoneNumber, password  },
      } = req;
  
      const found = await User.findOne({ email });
      if (found) throw new ErrorResponse("User Already Exist", 409);
  
      const hash = await bcrypt.hash(password, 10);
  
      const user = await User.create({ email, phoneNumber, password: hash });
  
      res.status(201).json({ email: user.email });
    } catch (error) {
      next(error);
    }
  };

  const login = async (req, res, next) => {
    try {
      const {
        body: { email, password },
      } = req;
  
      const user = await User.findOne({ email }).select("+password");
      if (!user) throw new ErrorResponse("User Doesn't Exist", 404);
  
      const match = await bcrypt.compare(password, user.password);
      if (!match) throw new ErrorResponse("Wrong Password", 403);
  
      const payload = { id: user._id, email: user.email };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "500m",
      });
  
      res
        .cookie("access_token", token, { httpOnly: true, maxAge: 480000 })
        .json(payload);
    } catch (error) {
      next(error);
    }
  };


  module.exports = {
    register,
    login,
  
  };