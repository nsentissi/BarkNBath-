require("dotenv/config");
require("./db.js");
const express = require("express");
const cors = require('cors')
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.js");

const userRouter = require("./routes/user.js");

const app = express();
const port = 3000;
const corsOptions = {
  origin: 'http://localhost:5173',  
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/auth", userRouter);


app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});