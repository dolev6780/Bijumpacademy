const express = require('express');
const {zoomAppoint} = require('../controllers/zoomAppointControllers');
const router = express.Router();

// zoomappointment route
router.post('/zoomappointment',zoomAppoint);

module.exports = router;