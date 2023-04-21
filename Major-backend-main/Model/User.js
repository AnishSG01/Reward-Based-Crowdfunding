const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name : {
        type: String,
        require: [true, "Name is Required"]
    },
    contact: {
        type:Number,
        require : [true, "Phone number is required"]

    },
    email: {
        type: String,
        require : [true , "Email is rquired"]
    },
    password : {
        type: String,
        minLength : [8 , "password cannot be less than 8 size"],
        require:[true , "password is required"]
    },
    role : {
        type : String,
        require : [true, "role is required"]
    }

})

module.exports = new mongoose.model('user' , UserSchema);