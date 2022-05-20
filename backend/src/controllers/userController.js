const knex = require('../models/knex')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.create = async(req, res) => {
    try {
        const {user_name, user_email, user_password} = req.body
        
        if (user_name && user_email && user_password) {
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
