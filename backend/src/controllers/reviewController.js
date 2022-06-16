const setuDb = require("../db/knex");
const Review = require("../models/reviewModel");

setuDb();

exports.create = async (req, res) => {
  try {
    let { comment, user_id } = req.body;
    const insertData = await Review.query().insert({
      comment: comment,
      user_id: user_id,
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
    const dataReview = await Review.query();
    return res.status(200).json({
      data: dataReview,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const review = await Review.query().findById(id);
    if (!review) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
      data: review,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  try {
    let { comment, user_id } = req.body;
    if (!comment) return res.json({ message: "Commant name required!" });

    let id = req.params.id;
    const review = await Review.query().patchAndFetchById(id, {
      comment: comment,
      user_id: user_id,
    });

    if (!review) {
      res.status(404).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: review,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;
    const review = await Review.query().deleteById(id);
    if (!review) return res.status(404).json({ message: "Id not found!" });
    
    return res.status(200).json({
      message: "Data berhasil dihapus!",
      data: review,
    });
  } catch (err) {
    res.json(err);
  }
};