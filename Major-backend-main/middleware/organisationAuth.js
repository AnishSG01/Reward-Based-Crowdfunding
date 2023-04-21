const User = require("../Model/User");

exports.organisationAuth = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.user_id);
    const role = user.role;

    if (role === "organisation") {
      next();
    } else {
      res.json({
        message: "Not a required Role",
      });
    }
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
  }
};
