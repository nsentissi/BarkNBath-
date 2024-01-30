require("dotenv/config");
require("./db.js");
const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const errorHandler = require("./middlewares/errorHandler.js");

const userRouter = require("./routes/user.js");
const appointmentRouter = require("./routes/appointment.js");
const petRouter = require("./routes/pet.js");
const blogRouter = require("./routes/blog.js");

const app = express();
const port = 3000;
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "dist")));

app.use("/api/auth", userRouter);
app.use("/api/appointment", appointmentRouter);
app.use("/api/pet", petRouter);
app.use("/api/blog", blogRouter);

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
