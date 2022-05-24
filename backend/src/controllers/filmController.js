const setuDb = require('../models/knex')
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const Film = require("../models/filmModel")

setuDb();

exports.validate = (method) => {
    switch (method) {
        case "createFilm": {
            return [body(
                'description',
                'rating_film',
                'user_id',
                'actor_id',
                'review_id',
                'genre_id'
            ).notEmpty()]
        }
        case "updateFilm": {
            return [
                param("id").notEmpty(),
                body(
                    'description',
                    'rating_film',
                    'user_id',
                    'actor_id',
                    'review_id',
                    'genre_id',
                    'director_id'
                ).notEmpty(),
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

        let { 
            description,
            rating_film,
            user_id,
            actor_id,
            review_id,
            genre_id,
            director_id
        } = req.body;
        const insertData = await Film.query().insert({
            description: description,
            rating_film: rating_film,
            user_id: user_id,
            actor_id: actor_id,
            review_id: review_id,
            genre_id: genre_id,
            director_id: director_id
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
        const dataFilm = await Film.query();
        return res.status(200).json({
            data: dataFilm,
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
        const film = await Film.query().findById(id);
        if (!film) {
            res.status(200).send({ status: false, message: "Data tidak tersedia!" });
            return;
        }

        return res.status(200).json({
            message: "success",
            data: film,
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
        let { 
            description,
            rating_film,
            user_id,
            actor_id,
            review_id,
            genre_id,
            director_id
        } = req.body;
        const film = await Film.query().patchAndFetchById(id, {
            description: description,
            rating_film: rating_film,
            user_id: user_id,
            actor_id: actor_id,
            review_id: review_id,
            genre_id: genre_id,
            director_id: director_id
        });

        if (!film) {
            res.status(200).json({ status: false, message: "Data tidak tersedia!" });
            return;
        }
        return res.status(200).json({
            message: "Data diperbarui!",
            data: film,
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
        const film = await Film.query().deleteById(id);
        return res.status(200).json({
            message: "Data berhasil dihapus!",
            data: film,
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: "connection error!",
        });
    }
};
