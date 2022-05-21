const setupDb = require("../models/knex"); // setupDb
const { body } = require("express-validator"); // body validator
const { validationResult } = require("express-validator"); // result validation
const Actor = require("../models/actor"); // model

setupDb(); // run function setuDb

exports.validate = (method) => {
  switch (method) {
    case "createActor": {
      return [body("actor_name").notEmpty()];
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

    const { actor_name } = req.body;

    let insertData = await Actor.query().insert({
      actor_name: actor_name,
    });

    return res.status(201).json({
      message: "Data berhasil disimpan",
      data: insertData,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: "error!",
    });
  }
};
