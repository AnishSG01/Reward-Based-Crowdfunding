const jwt = require("jsonwebtoken");

exports.userAuth = async (req, res, next) => {

  try {
    
    const token = req.header("token") || req.cookies.token;

    if (!token) {
      res.status(401).json({
        message: "not allowed without Auth",
      });
    }

    const users = jwt.verify(token, "lavlesh");

    req.user = {
      user_id: users.id,
    };

  } catch (error) {
    return res.json({
      message: "token errorr",
    });
  }

  next();
};
