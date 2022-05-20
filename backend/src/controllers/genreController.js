const knex = require('../models/knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.create = async(req, res) => {
    try {
        const {genre_name} = req.body
        
        if (genre_name) {
            return res.status(400).send({
                message: 'Tidak boleh kosong'
            })
        }
    } catch (error) {
        res.status(500).send({
            code: 500,
            status: false,
            message: error.message,
            data: null
        })
    }
}
