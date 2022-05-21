const setuDb = require('../models/knex')
const { body } = require("express-validator");
const { validationResult } = require("express-validator");
const Genre = require("../models/genreModel")

setuDb();

exports.validate = (method) => {
    switch (method) {
        case "createGenre": {
            return [body('genre_name').notEmpty()]
        }
    }
}

exports.create = async(req, res) => {
    try {
        const errors = validationResult(req)
        
        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        const { genre_name } = req.body;

        let insertData = await Genre.query().insert({
            genre_name: genre_name,
        });

        return res.status(201).send({
            message: 'Data berhasil disimpan',
            data: insertData
        })

    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        })
    }
}
