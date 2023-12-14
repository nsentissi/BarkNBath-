const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/ErrorResponse");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) throw new ErrorResponse("Forbidden", 403);

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = payload;

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = verifyToken;