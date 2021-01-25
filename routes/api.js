const { route } = require('.');

const router = require('express').Router();
const apiController = require('../controller/apiController');
const { uploadSingle } = require('../midleware/multer');

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);
router.post('/booking-page', uploadSingle, apiController.bookingPage);


module.exports = router;