const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3000;
const fileUpload = require("express-fileupload");

require("dotenv").config();

const userRouter = require("./routes/userRouter");
const genreRouter = require("./routes/genreRouter");
const actorRouter = require("./routes/actorRouter");
const reviewRouter = require("./routes/reviewRouter");
const profileRouter = require("./routes/profileRouter");
const filmRouter = require("./routes/filmRouter");
const directorRouter = require("./routes/directorRouter");

const app = express();

app.use(cors({ origin: true, credentials: true }));
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
