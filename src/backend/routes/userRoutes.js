const express = require("express");
const req = require("express");
const { route } = require("express/lib/application");

const {registerUser} = require("../controllers/userControllers");


const router = express.Router();
router.use('signup',registerUser);
// router.use('signin', signinRouter);
// router.use('/listings', listingRouter);
// router.use('/settings', settingsRouter);
// router.use('/aboutus', aboutusRouter);
// router.use('/contactus', contactusRouter);
// router.use('/request', requestRouter);


module.exports = router;