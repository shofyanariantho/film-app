const setupDb = require('../models/knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const User = require("../models/usersModel");

setupDb();

exports.validate = (method) => {
    switch (method) {
      case "createUser": {
        return [body('user_name', 'user_email', 'user_password').notEmpty()];
      }
    }
  };

exports.create = async(req, res) => {
    try {
        const errors = validationResult(req);
        
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { user_name, user_email, user_password } = req.body;

        const hashPassword = bcrypt.hashSync(user_password, 8)

        let insertData = await User.query().insert({
            user_name: user_name,
            user_email: user_email,
            user_password: hashPassword
        });

        return res.status(201).send({
            message: 'Data berhasil disimpan',
            data: insertData
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        });
    }
};
