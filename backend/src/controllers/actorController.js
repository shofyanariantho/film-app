const setupDb = require("../models/knex"); // setupDb
const { body } = require("express-validator"); // body validator
const { validationResult } = require("express-validator"); // result validation
const Actor = require("../models/actor"); // model

setupDb(); // run function setuDb

// Validator
exports.validate = (method) => {
  switch (method) {
    case "createActor": {
      return [
        body("actor_name").notEmpty(), // validate name
      ];
    }
  }
};

// Create
exports.create = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { actor_name, actor_image } = req.body;

    let insertData = await Actor.query().insert({
      actor_name: actor_name,
      actor_image: actor_image,
    });

    return res.status(201).json({
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

// Read
exports.index = async (req, res) => {
  try {
    let dataActor = await Actor.query();

    return res.status(200).json({
      data: dataActor,
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
    const actor = await Actor.query().findById(id);

    if (!actor) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "Data Actor tersedia!",
      data: actor,
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: "connection error!",
    });
  }
};
