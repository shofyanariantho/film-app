const setuDb = require("../db/knex");
const Profile = require("../models/profileModel");

setuDb();

exports.create = async (req, res) => {
  try {
    let { mobile, user_id } = req.body;
    const insertData = await Profile.query().insert({
      mobile: mobile,
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
    const dataProfile = await Profile.query();
    return res.status(200).json({
      data: dataProfile,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.show = async (req, res) => {
  try {
    let id = req.params.id;
    const profile = await Profile.query().findById(id);
    if (!profile) {
      res.status(404).send({ status: false, message: "Data tidak tersedia!" });
      return;
    }

    return res.status(200).json({
      message: "success",
      data: profile,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.update = async (req, res) => {
  try {
    let { mobile, user_id } = req.body;
    if (!mobile) return res.json({ message: "Mobile name required!" });

    let id = req.params.id;
    const profile = await Profile.query().patchAndFetchById(id, {
      mobile: mobile,
      user_id: user_id,
    });

    if (!profile) {
      res.status(404).json({ status: false, message: "Data tidak tersedia!" });
      return;
    }
    return res.status(200).json({
      message: "Data diperbarui!",
      data: profile,
    });
  } catch (err) {
    res.json(err);
  }
};

exports.destroy = async (req, res) => {
  try {
    let id = req.params.id;
    const profile = await Profile.query().deleteById(id);
    if (!profile) return res.status(404).json({ message: "Id not found!" });
    
    return res.status(200).json({
      message: "Data berhasil dihapus!",
      data: profile,
    });
  } catch (err) {
    res.json(err);
  }
};
