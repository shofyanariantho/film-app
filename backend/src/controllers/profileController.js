const setuDb = require("../db/knex");
const Profile = require("../models/profileModel");

setuDb();

exports.create = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res
        .status(404)
        .json({ status: false, message: "You're not logged in!" });

    let { mobile, user_id } = req.body;
    const insertData = await Profile.query().insert({
      mobile: mobile,
      user_id: user_id,
    });

    return res.json(insertData);
  } catch (err) {
    return res.json(err.data);
  }
};

exports.index = async (req, res) => {
  try {
    const dataProfile = await Profile.query();
    return res.json({ profiles : dataProfile });
  } catch (err) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const profile = await Profile.query().findById(id);
    
    if (!profile) {
      res.status(404).send({ message: "Id not Found!" });
      return;
    }

    return res.status(200).json({
      data: profile,
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

  const profile = await Profile.query().findById(req.params.id);
  if (!profile) return res.status(404).json({ message: "Id not found!" });

  try {
    let { mobile, user_id } = req.body;
    if (!mobile) return res.json({ message: "Mobile name required!" });

    let id = req.params.id;
    const profile = await Profile.query().patchAndFetchById(id, {
      mobile: mobile,
      user_id: user_id,
    });

    return res.json({
      message: "Data has change!",
      data: { profile },
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

  const profile = await Profile.query().findById(req.params.id);
  if (!profile) return res.status(404).json({ message: "Id not found!" });
  
  try {
    let id = req.params.id;
    const profile = await Profile.query().deleteById(id);
    
    return res.json({
      data: { id },
    });
  } catch (err) {
    res.json(err);
  }
};
