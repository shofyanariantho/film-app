const setuDb = require("../db/knex");
const Genre = require("../models/genreModel");

setuDb();

//create
exports.create = async (req, res) => {
  try {
    let { genre_name } = req.body;
    const insertData = await Genre.query().insert({
      genre_name: genre_name,
    });

    return res.status(201).json({
      message: "Data berhasil disimpan",
      data: insertData,
    });
  } catch (err) {
    res.json(err);
  }
};

// Read
exports.index = async (req, res) => {
  try {
    const dataGenre = await Genre.query();
    return res.status(200).json({
      data: dataGenre,
    });
  } catch (err) {
    res.json(err);
  }
};

// Show
exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const genre = await Genre.query().findById(id);
    if (!genre) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
      data: genre,
    });
  } catch (err) {
    res.json(err);
  }
};

// Update
exports.update = async (req, res) => {
  try {
    let { genre_name } = req.body;
    if (!genre_name) return res.json({ message: "Genre name required!" });

    let id = req.params.id;
    const genre = await Genre.query().patchAndFetchById(id, {
      genre_name: genre_name,
    });

    if (!genre) {
      res.status(404).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: genre,
    });
  } catch (err) {
    res.json(err);
  }
};

// Delete
exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;
    const genre = await Genre.query().deleteById(id);
    if (!genre) return res.status(404).json({ message: "Id not found!" });

    return res.status(200).json({
      message: "Data berhasil dihapus!",
      data: genre,
    });
  } catch (err) {
    res.json(err);
  }
};
