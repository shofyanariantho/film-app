const setupDb = require("../db/knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

setupDb();

exports.create = async (req, res) => {
  try {
    let { user_name, user_email, user_password } = req.body;
    const hashPassword = bcrypt.hashSync(user_password, 8);
    const insertData = await User.query().insert({
      user_name: user_name,
      user_email: user_email,
      user_password: hashPassword,
    });

    return res.status(201).send({
      message: "Data berhasil disimpan",
      data: insertData,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.index = async (req, res) => {
  try {
    let dataUser = await User.query();
    return res.status(200).json({
      data: dataUser,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.query().findById(id);
    if (!user) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "Data User tersedia!",
      data: user,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  try {
    let { user_name, user_email, user_password } = req.body;
    const hashPassword = bcrypt.hashSync(user_password, 8);
    if (!user_password) return res.json({ message: "Password name required!" });

    let id = req.params.id;
    const user = await User.query().patchAndFetchById(id, {
      user_name: user_name,
      user_email: user_email,
      user_password: hashPassword,
    });

    if (!user) {
      res.status(404).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: user,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;
    const user = await User.query().deleteById(id);
    return res.status(200).json({
      message: "Data berhasil dihapus!",
      data: user,
    });
  } catch (error) {
    res.json(err);
  }
};
