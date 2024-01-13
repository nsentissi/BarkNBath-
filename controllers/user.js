const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const ErrorResponse = require("../utils/ErrorResponse");

const register = async (req, res, next) => {
  try {
    const {
      body: { firstName, lastName, email, phoneNumber, password },
    } = req;

    const found = await User.findOne({ email });
    if (found) throw new ErrorResponse("User Already Exist", 409);

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      password: hash,
    });

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

    const user = await User.findOne({ email })
      .select("+password")
      .populate("pets");
    if (!user) throw new ErrorResponse("User Doesn't Exist", 404);

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new ErrorResponse("Wrong Password", 403);
    if (match) console.log("you are logged in");

    const payload = {
      id: user._id,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phoneNumber,
      password: user.password,
      pets: user.pets,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "5000m",
    });

    res
      .cookie("access_token", token, {
        httpOnly: true,
        maxAge: 980000,
        /* secure: process.env.NODE_ENV === "production", */
        sameSite: "lax",
      })
      .json({ ...payload, pets: user.pets });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id,
      { $set: { isActive: false } },
      { new: true }
    );

    console.log(user);
    if (!user) {
      throw new ErrorResponse("User not found", 404);
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const returnUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id,
      { $set: { isActive: true } },
      { new: true }
    );

    console.log(user);
    if (!user) {
      throw new ErrorResponse("User not found", 404);
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const logout = async (req, res, next) => {
  res
    .cookie("access_token", "", { httpOnly: true, maxAge: 0 })
    .json({ success: true });
  console.log("you are logged out");
};

const getProfile = async (req, res, next) => {
  const { id } = req.user;
  try {
    const user = await User.findOne({ _id: id }).populate("pets");
    res.json(user);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { newPassword, newPhoneNumber } = req.body;

    if (!newPassword && !newPhoneNumber) {
      throw new ErrorResponse("No new data provided", 400);
    }

    const user = await User.findOne({ _id: id });
    if (!user) throw new ErrorResponse("User not found", 404);

    if (newPassword) {
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      user.password = hashedPassword;
    }

    if (newPhoneNumber) {
      user.phoneNumber = newPhoneNumber;
    }

    await user.save();
    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.log(error);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  getProfile,
  updateUser,
  getAllUsers,
  deleteUser,
  returnUser,
};
