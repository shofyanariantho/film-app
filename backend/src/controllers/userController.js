const setupDb = require("../db/knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");
const { json } = require("express/lib/response");
// const { verifiy, verifyToken } = require("../middleware/verifyToken");
const cookieParser = require("cookie-parser");

cookieParser();
setupDb();

// Register
exports.create = async (req, res) => {
  try {
    let { user_name, user_email, user_password, confirm_password } = req.body;
    if (!confirm_password)
      return res.status(404).json({ message: "Confirm password required!" });

    if (user_password !== confirm_password)
      return res.status(400).json({ message: "Password does not match!" });

    const hashPassword = bcrypt.hashSync(user_password, 8);
    const insertData = await User.query().insert({
      user_name: user_name,
      user_email: user_email,
      user_password: hashPassword,
    });

    return res.status(201).send({
      message: "Data saved!",
      data: insertData,
    });
  } catch (err) {
    res.json(err);
  }
};

// Index
exports.index = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    const user = await User.query().findOne("refresh_token", refreshToken);

    if (!user) return res.status(204);

    const userId = user.id;
    const dataUser = await User.query().findById(userId);

    return res.status(200).json({
      data: dataUser,
    });
  } catch (err) {
    res.json(err);
  }
};

// Update Password
exports.update = async (req, res) => {
  try {
    let { user_password, confirm_password } = req.body;
    if (!user_password || !confirm_password)
      return res.status(400).json({ message: "Password required!" });

    if (user_password !== confirm_password)
      return res.status(400).json({ message: "Password does not match!" });

    const hashPassword = bcrypt.hashSync(user_password, 8);
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    
    const user = await User.query().findOne("refresh_token", refreshToken);

    if (!user) return res.status(204);

    const userId = user.id;

    await User.query().patchAndFetchById(userId, {
      user_password: hashPassword,
    });

    return res.status(200).json({
      message: "Password has change!",
      data: user,
    });
  } catch (error) {
    res.json(err);
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const user = await User.query().findOne("user_email", req.body.user_email);

    const match = await bcrypt.compare(
      req.body.user_password,
      user.userPassword
    );

    if (!match) return res.status(400).json({ message: "Wrong password!" });

    const userId = user.id;
    const name = user.userName;
    const email = user.userEmail;

    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "20s",
      }
    );

    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await User.query().patchAndFetchById(userId, {
      refresh_token: refreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.json({
      data: { name: user.userName, email: user.userEmail },
      token: accessToken,
    });
  } catch (err) {
    res.status(404).json({ message: "Invalid email" });
  }
};

// Logout
exports.logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    const user = await User.query().findOne("refresh_token", refreshToken);

    if (!user) return res.status(204);

    const userId = user.id;

    await User.query().findById(userId).patch({
      refresh_token: null,
    });

    res.clearCookie("refreshToken");
    return res
      .status(200)
      .json({ status: "OK", message: "You're logging out!" });
  } catch (err) {
    res.json(err);
  }
};
