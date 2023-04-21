const mongoose = require("mongoose");

const DonationSchema = mongoose.Schema({
    organisation : {
        type : "String",
        require : [true , 'Organisation is required']
    },
    phone : {
        type : Number,
        require : [true , 'Phone Number is required']
    },
    email : {
        type : "String",
        require : [true , 'Email is required']
    },
    description : {
        type : "String",
        require : [true , 'Description is required']
    },
    posterUrl : {
        type : "String",
        require : [true , 'Url is required']
    },
    documentUrl : {
        type : "String",
        require : [true , 'Url is required']
    },
    cause : {
        type : "String",
        require : [true , 'cause is required']
    },
    detail : {
        type : "String",
        require : [true , 'deatils is required']
    },
    isApproved : false,
    isProcessed : false,
})

module.exports = new mongoose.model('donation' , DonationSchema);