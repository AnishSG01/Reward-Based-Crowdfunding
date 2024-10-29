const express = require('express')
const app = express()
const cookieparser = require('cookie-parser')
const cors = require('cors')
const {connectToDb} = require('./config/Db')
const userRoute = require("./routes/userRoute")
const donateRoute = require("./routes/donateRoute")
const contactRoute = require("./routes/contactRoute")
const emailRoute = require("./routes/emailRoute")

app.use(express.json())
app.use(cors())
app.use(cookieparser())
app.use(express.urlencoded({extended:true}));

connectToDb();

app.use('/user' , userRoute)
app.use('/donate', donateRoute)
app.use('/contact', contactRoute)
app.use('/email', emailRoute )

module.exports = app;
