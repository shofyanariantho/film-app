const setuDb = require("../db/knex");
const Film = require("../models/filmModel");
const path = require("path");
const fs = require("fs");

setuDb();

exports.create = async (req, res) => {
  try {
    let {
      judul_film,
      description,
      rating_film,
      user_id,
      actor_id,
      review_id,
      genre_id,
      director_id,
    } = req.body;
    const insertData = await Film.query().insert({
      judul_film: judul_film,
      description: description,
      rating_film: rating_film,
      user_id: user_id,
      actor_id: actor_id,
      review_id: review_id,
      genre_id: genre_id,
      director_id: director_id,
    });

    return res.json(insertData);
  } catch (err) {
    return res.json(err.data);
  }
};

exports.index = async (req, res) => {
  try {
    const dataFilm = await Film.query();
    return res.json({ films: dataFilm });
  } catch (err) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const film = await Film.query().findById(id);

    if (!film) {
      res.status(404).send({ message: "Id not Found!" });
      return;
    }

    return res.json({
      data: film,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  const film = await Film.query().findById(req.params.id);
  if (!film) return res.status(404).json({ message: "Id not found!" });

  try {
    let {
      judul_film,
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
      judul_film: judul_film,
      description: description,
      rating_film: rating_film,
      user_id: user_id,
      actor_id: actor_id,
      review_id: review_id,
      genre_id: genre_id,
      director_id: director_id,
    });

    return res.json({
      message: "Data has change!",
      data: { film },
    });
  } catch (err) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  const film = await Film.query().findById(req.params.id);
  if (!film) return res.status(404).json({ message: "Id not found!" });

  const { filmImage } = await Film.query().findById(req.params.id);

  if (filmImage !== null) {
    const filePath = "././images/film/" + filmImage;
    fs.unlinkSync(filePath);
  }

  try {
    let id = req.params.id;
    const film = await Film.query().deleteById(id);

    return res.json({
      message: "Data deleted!",
      deleted: { id },
    });
  } catch (err) {
    res.json(err);
  }
};

exports.upload = async (req, res) => {
  const film = await Film.query().findById(req.params.id);
  if (!film) return res.status(404).json({ message: "Id not found!" });

  if (req.files == null) {
    return res.status(400).json({ message: "No File Uploaded!" });
  } else {
    const file = req.files.film_image;
    if (!file) return res.status(404).json({ message: "film image required" });

    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = Date.now() + "-" + file.name;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res.status(422).json({ message: "Invalid file!" });
    if (fileSize > 5000000)
      return res.status(422).json({ message: "Image must less than 5 MB!" });

    const { filmImage } = await Film.query().findById(req.params.id);

    if (filmImage !== null) {
      const filePath = "././images/film/" + filmImage;
      fs.unlinkSync(filePath);
    }

    file.mv(`././images/film/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ message: err.message });
      try {
        const updatedfilm = await Film.query().patchAndFetchById(
          req.params.id,
          {
            film_image: fileName,
          }
        );
        res
          .status(200)
          .json({ message: "Image Succesfully Uploaded", updatedfilm });
      } catch (err) {
        console.log(err);
      }
    });
  }
};