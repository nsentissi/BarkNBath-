const errorHandler = async (err, req, res, next) => {
    console.log(err.message);
    res.status(err.statusCode || 500).send(err.message || "Something went wrong");
  };
  
  module.exports = errorHandler;