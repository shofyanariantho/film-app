const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");

exports.refreshToken = async (req, res) => {
  try {
    const { refreshToken } = req.cookies;
    if (!refreshToken) return res.status(401);

    const user = await User.query().where({
      refresh_token: refreshToken,
    });
    if (!user[0]) return res.status(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(403);

        const userId = user[0].id;
        const name = user[0].user_name;
        const email = user[0].user_email;
        const accessToken = jwt.sign(
          { userId, name, email },
          process.env.REFRESH_TOKEN_SECRET,
          {
            expiresIn: "15s",
          }
        );
        res.json({ accessToken });
      }
    );
  } catch (err) {
    res.json(err);
  }
};
