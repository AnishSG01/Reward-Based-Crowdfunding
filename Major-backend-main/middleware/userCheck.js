const User = require("../Model/User");

exports.userCheck = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.user_id);
    const role = user.role;

    if (role === "user") {
      next();
    } else {
      res.json({
        message: "Not a User",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
