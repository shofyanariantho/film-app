const setupDb = require("../models/knex");
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const Director = require("../models/directorModel");

setupDb();

exports.validate = (method) => {
  switch (method) {
      case "createDirector": {
          return [body('director_name').notEmpty()]
      }
      case "updateDirector": {
          return [
              param("id").notEmpty(),
              body("director_name").notEmpty(),
          ];
      }
  }
}

exports.create = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    let { director_name, director_image } = req.body;
    const insertData = await Director.query().insert({
      director_name: director_name,
      director_image: director_image,
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

exports.index = async (req, res) => {
  try {
    let dataDirector = await Director.query();
    return res.status(200).json({
      data: dataDirector,
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
    const director = await Director.query().findById(id);
    if (!director) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
      data: director,
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
      let { director_name, director_image } = req.body;
      const director = await Director.query().patchAndFetchById(id, {
          director_name: director_name,
          director_image: director_image
      });

      if (!director) {
          res.status(200).json({ status: false, message: "Data tidak tersedia!" });
          return;
      }
      return res.status(200).json({
          message: "Data diperbarui!",
          data: director,
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
      const director = await Director.query().deleteById(id);
      return res.status(200).json({
          message: "Data berhasil dihapus!",
          data: director,
      });
  } catch (error) {
      res.status(500).send({
          code: 500,
          status: false,
          message: "connection error!",
      });
  }
};
