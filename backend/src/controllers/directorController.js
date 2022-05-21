const setupDb = require("../models/knex");
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const Director = require("../models/directorModel"); 

setupDb();

exports.validate = (method) => {
    switch (method) {
        case "createDirector": {
        return [body("director_name", "director_image").notEmpty()];
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

    const { director_name, director_image } = req.body;

    let insertData = await Director.query().insert({
        director_name: director_name,
        director_image: director_image
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

