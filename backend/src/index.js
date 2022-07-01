const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const userRouter = require("./routes/userRouter");
const genreRouter = require("./routes/genreRouter");
const actorRouter = require("./routes/actorRouter");
const reviewRouter = require("./routes/reviewRouter");
const profileRouter = require("./routes/profileRouter");
const filmRouter = require("./routes/filmRouter");
const directorRouter = require("./routes/directorRouter");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use("/images", express.static("images"));

app.use("/user", userRouter);
app.use("/genre", genreRouter);
app.use("/actor", actorRouter);
app.use("/review", reviewRouter);
app.use("/profile", profileRouter);
app.use("/film", filmRouter);
app.use("/director", directorRouter);

app.listen(port, () => {
  console.log("Server Running");
});
