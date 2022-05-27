const setupDb = require("../db/knex");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const User = require("../models/usersModel");

setupDb();

exports.validate = (method) => {
  switch (method) {
    case "createUser": {
      return [body("user_name", "user_email", "user_password").notEmpty()];
    }
    case "updateUser": {
      return [
        param("id").notEmpty(),
        body("user_name", "user_email", "user_password").notEmpty(),
      ];
    }
  }
};

exports.create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

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
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
  }
};

exports.index = async (req, res) => {
  try {
    let dataUser = await User.query();
    return res.status(200).json({
      data: dataUser,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
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
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    let id = req.params.id;
    let { user_name, user_email, user_password } = req.body;
    const hashPassword = bcrypt.hashSync(user_password, 8);
    const user = await User.query().patchAndFetchById(id, {
      user_name: user_name,
      user_email: user_email,
      user_password: hashPassword,
    });

    if (!user) {
      res.status(200).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: user,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
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
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
  }
};
