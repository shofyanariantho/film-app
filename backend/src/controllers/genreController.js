const knex = require('../models/knex')

exports.create = async(req, res) => {
    try {
        const {genre_name} = req.body
        
        if (genre_name == "") {
            return res.status(400).send({
                message: 'Tidak boleh kosong'
            })
        }

        let insertData = await knex('genres').insert({
            genre_name: genre_name,
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
