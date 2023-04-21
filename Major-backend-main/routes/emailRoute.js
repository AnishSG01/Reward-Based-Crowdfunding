const express = require('express');
const { sendEmail } = require('../Controller/EmailController');
const router = express.Router();

router.post('/sendemail', sendEmail);

module.exports = router;