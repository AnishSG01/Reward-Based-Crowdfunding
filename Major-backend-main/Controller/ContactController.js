const contact = require("../Model/Contact");

exports.createContact = async (req, res) => {
  try {
    const data = req.body;
    const createdData = await contact.create(data);

    if (createdData) {
      res.status(201).json({
        success: true,
        createdData,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContact = async (req, res) => {
  try {
    const data = await contact.find();

    if (data) {
      res.status(200).json({
        success: true,
        data,
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
