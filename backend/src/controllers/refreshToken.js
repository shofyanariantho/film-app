const User = require("../models/usersModel");
const jwt = require("jsonwebtoken");

exports.refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "Invalid Authentication" });

    const user = await User.query().findOne("refresh_token", refreshToken);
    if (!user) return res.status(403);

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.status(403);

        const userId = user.id;
        const name = user.user_name;
        const email = user.user_email;

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
