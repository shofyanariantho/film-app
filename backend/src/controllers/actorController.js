const knex = require('../models/knex')

exports.create = async(req, res) => {
    try {
        const {actors_name, cast_actor} = req.body
        
        if (actors_name && cast_actor == "") {
            return res.status(400).send({
                message: 'Tidak boleh kosong'
            })
        }

        let insertData = await knex('actors').insert({
            actors_name: actors_name,
            cast_actor: cast_actor
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
