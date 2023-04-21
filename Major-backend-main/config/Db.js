const mongoose = require('mongoose')
const url = 'mongodb+srv://Lavlesh_15:8gAZw6xFKhVf2cCX@cluster0.w0arycd.mongodb.net/?retryWrites=true&w=majority'

exports.connectToDb = () => {
    mongoose.connect(url ,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then((conn)=> {
        console.log('conected to Database')
    })
    .catch(err => {
        console.log(err)
    })
}