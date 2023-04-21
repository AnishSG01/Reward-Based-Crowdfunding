const User = require("../Model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.createUserController = async (req, res) => {
  try {
    const { name, contact, email, password, role } = req.body;
    const user = await User.findOne({ email });

    if (user) {
      throw new Error("Email Already Exist");
    }

    const salt = await bcrypt.genSalt(10);
    const encryptedpassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      contact,
      email,
      password: encryptedpassword,
      role
    });

    const data = {
      id: newUser._id,
    };

    const token = jwt.sign(data, "lavlesh");
    const createdUser  = newUser;

    createdUser.password = undefined;

    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: false,
      })
      .json({
        success: "true",
        token,
        createdUser,
      });
  } catch (error) {
    res.status(401).json({
      success: "false",
      message: error.message,
    });
  }
};

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isEmailexist = await User.findOne({ email });

    if (!isEmailexist) {
      throw new Error("No Such email exist");
    }

    const user = await User.findOne({ email });
    const comparedpassword = await bcrypt.compare(password, user.password);

    if (!comparedpassword) throw new Error("wrong Password");

    const data = {
      id: user._id,
    };

    const token = jwt.sign(data, "lavlesh");

    user.password = undefined;

    res
      .status(201)
      .cookie("token", token, {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: false,
      })
      .json({
        success: "true",
        token,
        user,
      });
  } catch (error) {
    res.json({
      success: "false",
      message: error.message,
    });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.user_id);

    if (!user) {
      throw new Error("No User Exist");
    }

    user.password = undefined;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.logout = async (req, res) => {
  try {
    res.cookie('token', 'none',  {
      expires: new Date(Date.now() + 1 * 1000),
      httpOnly: true,
    });
    res
      .status(200)
      .json({ success: true, 'message': "User logged out successfully" });

  } catch (error) {
    res.status(401).json({
      'message': error.message,
    });
  }
};
