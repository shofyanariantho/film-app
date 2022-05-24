const setuDb = require('../models/knex')
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const Review = require("../models/reviewModel")

setuDb();

exports.validate = (method) => {
    switch (method) {
        case "createReview": {
            return [body('comment').notEmpty()]
        }
        case "updateReview": {
            return [
                param("id").notEmpty(),
                body("comment").notEmpty(),
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

        let { comment, user_id } = req.body;
        const insertData = await Review.query().insert({
            comment: comment,
            user_id: user_id
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
        const dataReview = await Review.query();
        return res.status(200).json({
            data: dataReview,
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
        const review = await Review.query().findById(id);
        if (!review) {
            res.status(200).send({ status: false, message: "Data tidak tersedia!" });
            return;
        }

        return res.status(200).json({
            message: "success",
            data: review,
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
        let { comment, user_id } = req.body;
        const review = await Review.query().patchAndFetchById(id, {
            comment: comment,
            user_id: user_id
        });

        if (!review) {
            res.status(200).json({ status: false, message: "Data tidak tersedia!" });
            return;
        }
        return res.status(200).json({
            message: "Data diperbarui!",
            data: review,
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
        const review = await Review.query().deleteById(id);
        return res.status(200).json({
            message: "Data berhasil dihapus!",
            data: review,
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: "connection error!",
        });
    }
};
