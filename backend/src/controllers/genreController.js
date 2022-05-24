const setuDb = require('../models/knex')
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const Genre = require("../models/genreModel")

setuDb();

exports.validate = (method) => {
    switch (method) {
        case "createGenre": {
            return [body('genre_name').notEmpty()]
        }
        case "updateGenre": {
            return [
                param("id").notEmpty(),
                body("genre_name").notEmpty(),
            ];
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

        let { genre_name } = req.body;
        const insertData = await Genre.query().insert({
            genre_name: genre_name,
        });

        return res.status(201).json({
            message: 'Data berhasil disimpan',
            data: insertData
        })
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: "connection error!",
        })
    }
}

exports.index = async (req, res) => {
    try {
        const dataGenre = await Genre.query();
        return res.status(200).json({
            data: dataGenre,
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
        const genre = await Genre.query().findById(id);
        if (!genre) {
            res.status(200).send({ status: false, message: "Data tidak tersedia!" });
            return;
        }

        return res.status(200).json({
            message: "success",
            data: genre,
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
        let { genre_name } = req.body;
        const genre = await Genre.query().patchAndFetchById(id, {
            genre_name: genre_name,
        });

        if (!genre) {
            res.status(200).json({ status: false, message: "Data tidak tersedia!" });
            return;
        }
        return res.status(200).json({
            message: "Data diperbarui!",
            data: genre,
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
        const genre = await Genre.query().deleteById(id);
        return res.status(200).json({
            message: "Data berhasil dihapus!",
            data: genre,
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: "connection error!",
        });
    }
};
