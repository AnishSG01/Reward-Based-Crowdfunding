const User = require("../Model/User");

exports.adminAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.user_id);
    const role = user.role;

    if (role === "admin") {
      next();
    } else {
      res.json({
        message: "Not a admin",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
