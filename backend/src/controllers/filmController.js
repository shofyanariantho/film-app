const knex = require('../models/knex')

exports.create = async(req, res) => {
    try {
        const {description, rating_film, user_id, actor_id, review_id, genre_id} = req.body
        
        if (description && rating_film && user_id && actor_id && review_id && genre_id == "") {
            return res.status(400).send({
                message: 'Tidak boleh kosong'
            })
        }

        let insertData = await knex('films').insert({
            description: description,
            rating_film: rating_film,
            user_id: user_id,
            actor_id: actor_id,
            review_id: review_id,
            genre_id: genre_id
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
