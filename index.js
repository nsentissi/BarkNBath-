require("dotenv/config");
require("./db.js");
const express = require("express");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.js");

const userRouter = require("./routes/user.js");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/auth", userRouter);

// the error handling middleware should be the last middleware, after the routers
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});