const jwt = require("jsonwebtoken");
const ErrorResponse = require("../utils/ErrorResponse");

const authorize = (role) => {
  return (req, res, next) => {
    try {
      const { user } = req;
      if (user.role === role) return next();
      res.status(401).send("Unauthorized");
    } catch (error) {
      next(error);
    }
  };
};

module.exports = authorize;
