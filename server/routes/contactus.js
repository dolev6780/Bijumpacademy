const express = require('express');
const {contactUs} = require('../controllers/contactusController');
const router = express.Router();

// contactus route
router.post('/contactus',contactUs);

module.exports = router;