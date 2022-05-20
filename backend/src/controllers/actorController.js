const knex = require("../models/knex");
const { body } = require("express-validator");
const { validationResult } = require("express-validator");

exports.validate = (method) => {
  switch (method) {
    case "createActor": {
      return [body("actor_name", "Actor Name is not valid!").not().isEmpty()];
    }
  }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    const { actor_name } = req.body;

    let insertData = await knex("actors").insert({
      actor_name: actor_name,
    });

    return res.status(201).json({
      message: "Data berhasil disimpan",
      data: {
        id: insertData[0],
        actor_name,
      },
    });
  } catch (error) {
    res.status(500).send({
      code: 500,
      status: false,
      message: "Values not valid!",
      data: null,
    });
  }
};
