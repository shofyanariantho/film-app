const jwt = require("jsonwebtoken");

exports.verifyLogin = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken == null)
        return res
        .status(401)
        .json({ status: false, message: "Please, login!" });

    jwt.verify(refreshToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(401).json({ token: false });
      req.user = user;
      next();
    });
  } catch (err) {
    res.json(err);
  }
};
