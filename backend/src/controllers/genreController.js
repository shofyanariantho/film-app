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

    return res.json( insertData );
  } catch (err) {
    return res.json(err.data);
  }
};

// Read
exports.index = async (req, res) => {
  try {
    const dataGenre = await Genre.query();
    return res.json({ genres : dataGenre });
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
      res.status(404).send({ message: "Id not Found!" });
      return;
    }

    return res.json({
      data: genre,
    });
  } catch (err) {
    res.json(err);
  }
};

// Update
exports.update = async (req, res) => {
  const genre = await Genre.query().findById(req.params.id);
  if (!genre) return res.status(404).json({ message: "Id not found!" });

  try {
    let { genre_name } = req.body;
    if (!genre_name) return res.json({ message: "Genre name required!" });

    let id = req.params.id;
    const genre = await Genre.query().patchAndFetchById(id, {
      genre_name: genre_name,
    });

    return res.json({
      message: "Data has change!",
      data: { genre },
    });
  } catch (err) {
    res.json(err);
  }
};

// Delete
exports.destroy = async (req, res) => {
  const genre = await Genre.query().findById(req.params.id);
  if (!genre) return res.status(404).json({ message: "Id not found!" });

  try {
    let id = req.params.id;
    const genre = await Genre.query().deleteById(id);

    return res.json({
      message: "Data deleted!",
      deleted: { id } 
    });
  } catch (err) {
    res.json(err);
  }
};
