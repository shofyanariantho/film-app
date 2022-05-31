const setuDb = require("../db/knex");
const Film = require("../models/filmModel");

setuDb();

exports.create = async (req, res) => {
  try {
    let {
      description,
      rating_film,
      user_id,
      actor_id,
      review_id,
      genre_id,
      director_id,
    } = req.body;
    const insertData = await Film.query().insert({
      description: description,
      rating_film: rating_film,
      user_id: user_id,
      actor_id: actor_id,
      review_id: review_id,
      genre_id: genre_id,
      director_id: director_id,
    });

    return res.status(201).json({
      message: "Data berhasil disimpan",
      data: insertData,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.index = async (req, res) => {
  try {
    const dataFilm = await Film.query();
    return res.status(200).json({
      data: dataFilm,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const film = await Film.query().findById(id);
    if (!film) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
      data: film,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  try {
    let {
      description,
      rating_film,
      user_id,
      actor_id,
      review_id,
      genre_id,
      director_id,
    } = req.body;
    if (!description) return res.json({ message: "Description name required!" });

    let id = req.params.id;
    const film = await Film.query().patchAndFetchById(id, {
      description: description,
      rating_film: rating_film,
      user_id: user_id,
      actor_id: actor_id,
      review_id: review_id,
      genre_id: genre_id,
      director_id: director_id,
    });

    if (!film) {
      res.status(404).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: film,
    });
  } catch (error) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;
    const film = await Film.query().deleteById(id);
    if (!film) return res.status(404).json({ message: "Id not found!" });

    return res.status(200).json({
      message: "Data berhasil dihapus!",
      data: film,
    });
  } catch (error) {
    res.json(err);
  }
};
