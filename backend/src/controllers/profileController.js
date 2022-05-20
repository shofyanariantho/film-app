const knex = require('../models/knex')

exports.create = async(req, res) => {
    try {
        const {mobile, user_id} = req.body
        
        if (mobile && user_id == "") {
            return res.status(400).send({
                message: 'Tidak boleh kosong'
            })
        }

        let insertData = await knex('profiles').insert({
            mobile: mobile,
            user_id: user_id
        }).then(insertedId =>{
            return insertedId
        })

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
