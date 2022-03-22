const router = require("express").Router();

const signinRouter = require("./signin.js");
const signupRouter = require("./signup.js");
const listingRouter = require("./listings.js");
const settingsRouter = require("./settings.js");
const aboutusRouter = require("./aboutus.js");
const contactusRouter = require("./contactus.js");
const requestRouter = require("./request.js");

router.use('/signin', signinRouter);
router.use('/signup', signupRouter);
router.use('/listings', listingRouter);
router.use('/settings', settingsRouter);
router.use('/aboutus', aboutusRouter);
router.use('/contactus', contactusRouter);
router.use('/request', requestRouter);
router.use('/test', ()=> {
    console.log("routing is working");
})

module.exports = router;