const express = require('express');
const { createDonation, getDonation, updateDonation, deleteDonation } = require('../Controller/DonateController');
const { organisationAuth } = require('../middleware/organisationAuth');
const { userAdminAuth } = require('../middleware/userAdminAuth');
const { userAuth } = require('../middleware/userAuth');
const router = express.Router();

router.post('/createDonation' , createDonation);
router.get('/donations', getDonation);
router.put('/donation/:id' , updateDonation );
router.delete('/donation/:id', deleteDonation);

module.exports = router;