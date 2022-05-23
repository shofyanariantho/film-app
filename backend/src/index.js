const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

require("express-validator");
require("dotenv").config();

const router = require("./routes/router");
const userRouter = require("./routes/userRouter");
const genreRouter = require("./routes/genreRouter");

//Actor
const actorRouter = require("./routes/actorRouter");

const reviewRouter = require("./routes/reviewRouter");
const profileRouter = require("./routes/profileRouter");
const filmRouter = require("./routes/filmRouter");
const directorRouter = require("./routes/directorRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
app.use(bodyParser.json());
// app.use(expressValidator());

app.use(cors({ origin: true, credentials: true }));

app.use("/", router);
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
