const setupDb = require("../db/knex");
const Director = require("../models/directorModel");
const path = require("path");
const fs = require("fs");

setupDb();

// create
exports.create = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    let { director_name } = req.body;
    const insertData = await Director.query().insert({
      director_name: director_name,
    });

    return res.json(insertData);
  } catch (err) {
    return res.json(err.data);
  }
};

// index
exports.index = async (req, res) => {
  try {
    const dataDirector = await Director.query();
    return res.status(200).json({ directors: dataDirector });
  } catch (err) {
    res.json(err);
  }
};

// show by id
exports.show = async (req, res) => {
  try {
    let { id } = req.params;
    const director = await Director.query().findById(id);
    if (!director) {
      res.status(404).send({ message: "Id not found!" });
      return;
    }

    return res.json({
      data: director,
    });
  } catch (err) {
    res.json(err);
  }
};

// update
exports.update = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const director = await Director.query().findById(req.params.id);
  if (!director) return res.status(404).json({ message: "Id not found!" });
  
  try {
    let { director_name } = req.body;
    if (!director_name)
      return res.status(404).json({ message: "Director name required!" });

    let { id } = req.params;
    const director = await Director.query().patchAndFetchById(id, {
      director_name: director_name,
    });

    return res.json({
      message: "Data has change!",
      data: { director },
    });
  } catch (err) {
    res.json(err);
  }
};

// delete
exports.destroy = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const director = await Director.query().findById(req.params.id);
  if (!director) return res.status(404).json({ message: "Id not Found!" });

  const { directorImage } = await Director.query().findById(req.params.id);
  
  if (directorImage !== null) {
    const filePath = "././images/director/" + directorImage;
    fs.unlinkSync(filePath);
  }

  try {
    let id = req.params.id;
    const director = await Director.query().deleteById(id);
    
    return res.json({
      message: "Data deleted!",
      deleted: { id },
    });
  } catch (err) {
    res.json(err);
  }
};

// upload image
exports.upload = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const director = await Director.query().findById(req.params.id);
  if (!director) return res.status(404).json({ message: "Id not found!" });

  if (req.files == null) {
    return res.status(400).json({ message: "No File Uploaded!" });
  } else {
    const file = req.files.director_image;
    if (!file)
      return res.status(404).json({ message: "Director image required" });

    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = Date.now() + "-" + file.name;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res.status(422).json({ message: "Invalid file!" });
    if (fileSize > 5000000)
      return res.status(422).json({ message: "Image must less than 5 MB!" });

    const { directorImage } = await Director.query().findById(req.params.id);

    if (directorImage !== null) {
      const filePath = "././images/director/" + directorImage;
      fs.unlinkSync(filePath);
    }

    file.mv(`././images/director/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ message: err.message });
      try {
        const updatedDirector = await Director.query().patchAndFetchById(
          req.params.id,
          {
            director_image: fileName,
          }
        );
        res
          .status(200)
          .json({ message: "Image Succesfully Uploaded", updatedDirector });
      } catch (err) {
        console.log(err);
      }
    });
  }
};
