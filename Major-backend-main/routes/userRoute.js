const express = require("express")
const { createUserController , loginController, getUser, logout} = require("../Controller/UserController")
const { userAuth } = require("../middleware/userAuth")
const router = express.Router()

router.post('/signup', createUserController)
router.post('/login' , loginController)
router.get('/profile' , getUser);
router.get('/logout', logout);

module.exports = router;