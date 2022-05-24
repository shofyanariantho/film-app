const setupDb = require("../models/knex"); // setupDb
const { body, param } = require("express-validator"); // body validator
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
    case "updateActor": {
      return [
        param("id").notEmpty(),
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

    let { actor_name } = req.body;

    const insertData = await Actor.query().insert({
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
      message: "connection error!",
    });
  }
};

// Read
exports.index = async (req, res) => {
  try {
    const dataActor = await Actor.query();

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

// Show
exports.show = async (req, res) => {
  try {
    let id = req.params.id;

    const actor = await Actor.query().findById(id);

    if (!actor) {
      res.status(200).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
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

// Update
exports.update = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    let id = req.params.id;
    let { actor_name } = req.body;

    const actor = await Actor.query().patchAndFetchById(id, {
      actor_name: actor_name,
    });

    if (!actor) {
      res.status(200).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "Data diperbarui!",
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

// Delete
exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;

    const actor = await Actor.query().deleteById(id);

    return res.status(200).json({
      message: "Data berhasil dihapus!",
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
