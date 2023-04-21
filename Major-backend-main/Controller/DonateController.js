const donation = require("../Model/Donation");

exports.createDonation = async (req, res) => {
  try {
    const data = req.body;
    const newdonation = await donation.create(data);

    res.status(201).json({
      success: true,
      data: newdonation,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getDonation = async (req, res) => {
  try {
    const data = await donation.find();
    if (data) {
      res.status(200).json({
        success: true,
        data: data,
      });
    } else {
      res.json({
        success: false,
        message: "No Data Present",
      });
    }
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateDonation = async (req, res) => {
  try {
    const id = req.params.id;
    const update = { isApproved: true, isProcessed: true };
    const filter = { _id: id };

    const data = await donation.findOneAndUpdate(filter, update, {
      new: true,
    });

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteDonation = async (req, res) => {
  try {
    const id = req.params.id;
    const filter = { _id: id };

    const res = await donation.findOneAndDelete(filter);

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(401).json({
      success: true,
      message: error.message,
    });
  }
};
