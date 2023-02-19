const express = require('express');
const {coursePayment, zoomPayment} = require('../controllers/paymentsControllers');

const router = express.Router();

router.post("/coursepayment", coursePayment);

router.post("/zoompayment", zoomPayment);
module.exports = router;