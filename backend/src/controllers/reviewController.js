const setuDb = require("../db/knex");
const Review = require("../models/reviewModel");

setuDb();

exports.create = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    let { comment, user_id } = req.body;
    const insertData = await Review.query().insert({
      comment: comment,
      user_id: user_id,
    });

    return res.json(insertData);
  } catch (err) {
    return res.json(err.data);
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
      res.status(404).send({ message: "Id not Found!" });
      return;
    }

    return res.json({
      data: review,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const review = await Review.query().findById(req.params.id);
  if (!review) return res.status(404).json({ message: "Id not found!" });

  try {
    let { comment, user_id } = req.body;
    if (!comment) return res.json({ message: "Commant name required!" });

    let id = req.params.id;
    const review = await Review.query().patchAndFetchById(id, {
      comment: comment,
      user_id: user_id,
    });

    return res.json({
      message: "Data has change!",
      data: { review },
    });
  } catch (err) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken)
    return res
      .status(404)
      .json({ status: false, message: "You're not logged in!" });

  const review = await Review.query().findById(req.params.id);
  if (!review) return res.status(404).json({ message: "Id not found!" });

  try {
    let id = req.params.id;
    const review = await Review.query().deleteById(id);
    
    return res.json({
      message: "Data deleted!",
      deleted: { id },
    });
  } catch (err) {
    res.json(err);
  }
};