const setuDb = require('../models/knex')
const { body, param } = require("express-validator");
const { validationResult } = require("express-validator");
const Profile = require("../models/profileModel")

setuDb();

exports.validate = (method) => {
    switch (method) {
        case "createProfile": {
            return [body('mobile').notEmpty()]
        }
        case "updateProfile": {
            return [
                param("id").notEmpty(),
                body("mobile").notEmpty(),
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

        let { mobile, user_id } = req.body;
        const insertData = await Profile.query().insert({
            mobile: mobile,
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
        const dataProfile = await Profile.query();
        return res.status(200).json({
            data: dataProfile,
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
        const profile = await Profile.query().findById(id);
        if (!profile) {
            res.status(200).send({ status: false, message: "Data tidak tersedia!" });
            return;
        }

        return res.status(200).json({
            message: "success",
            data: profile,
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
        let { mobile, user_id } = req.body;
        const profile = await Profile.query().patchAndFetchById(id, {
            mobile: mobile,
            user_id: user_id
        });

        if (!profile) {
            res.status(200).json({ status: false, message: "Data tidak tersedia!" });
            return;
        }
        return res.status(200).json({
            message: "Data diperbarui!",
            data: profile,
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
        const profile = await Profile.query().deleteById(id);
        return res.status(200).json({
            message: "Data berhasil dihapus!",
            data: profile,
        });
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: "connection error!",
        });
    }
};
