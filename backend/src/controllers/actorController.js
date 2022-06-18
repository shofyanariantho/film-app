const setupDb = require("../db/knex"); // setupDb
const Actor = require("../models/actorModel"); // Model
const path = require("path"); // Path
const fs = require("fs"); // Fs

setupDb();

// Create
exports.create = async (req, res) => {
  try {
    // Get User Token in Cookies
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    let actor_name = req.body.actor_name;
    const insertData = await Actor.query().insert({
      actor_name: actor_name,
    });

    return res.json(insertData);
  } catch (err) {
    return res.json(err.data);
  }
};

// Read
exports.index = async (req, res) => {
  try {
    const dataActor = await Actor.query();
    return res.json({ actors: dataActor });
  } catch (err) {
    res.json(err);
  }
};

// Show
exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const actor = await Actor.query().findById(id);

    if (!actor) {
      res.status(404).send({ message: "Id not Found!" });
      return;
    }

    return res.json({
      data: actor,
    });
  } catch (err) {
    res.json(err);
  }
};

// Update
exports.update = async (req, res) => {
  // Get User Token in Cookies
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const actor = await Actor.query().findById(req.params.id);
  if (!actor) return res.status(404).json({ message: "Id not found!" });

  try {
    let actor_name = req.body.actor_name;
    if (!actor_name) return res.json({ message: "Actor name required!" });

    let id = req.params.id;
    const actor = await Actor.query().patchAndFetchById(id, {
      actor_name: actor_name,
    });

    return res.json({
      message: "Data has change!",
      data: { actor },
    });
  } catch (err) {
    res.json(err);
  }
};

// Delete
exports.destroy = async (req, res) => {
  // Get User Token in Cookies
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const actor = await Actor.query().findById(req.params.id);
  if (!actor) return res.status(404).json({ message: "Id not found!" });

  const { actorImage } = await Actor.query().findById(req.params.id);

  if (actorImage !== null) {
    const filePath = "././images/actor/" + actorImage;
    fs.unlinkSync(filePath);
  }

  try {
    let id = req.params.id;
    const actor = await Actor.query().deleteById(id);

    return res.json({
      message: "Data deleted!",
      deleted: { id },
    });
  } catch (err) {
    res.json(err);
  }
};

// Upload Image
exports.upload = async (req, res) => {
  // Get User Token in Cookies
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const actor = await Actor.query().findById(req.params.id);
  if (!actor) return res.status(404).json({ message: "Id not found!" });

  if (req.files == null) {
    return res.status(400).json({ message: "No File Uploaded!" });
  } else {
    const file = req.files.actor_image;
    if (!file) return res.status(404).json({ message: "Actor image required" });

    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName = Date.now() + "-" + file.name;
    const allowedType = [".png", ".jpg", ".jpeg"];

    if (!allowedType.includes(ext.toLocaleLowerCase()))
      return res.status(422).json({ message: "Invalid file!" });
    if (fileSize > 5000000)
      return res.status(422).json({ message: "Image must less than 5 MB!" });

    const { actorImage } = await Actor.query().findById(req.params.id);

    if (actorImage !== null) {
      const filePath = "././images/actor/" + actorImage;
      fs.unlinkSync(filePath);
    }

    file.mv(`././images/actor/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ message: err.message });
      try {
        const updatedActor = await Actor.query().patchAndFetchById(
          req.params.id,
          {
            actor_image: fileName,
          }
        );
        res
          .status(200)
          .json({ message: "Image Succesfully Uploaded", updatedActor });
      } catch (err) {
        console.log(err);
      }
    });
  }
};
