const express = require("express");
const req = require("express");
const { route } = require("express/lib/application");
const {registerUser} = require("../controllers/userControllers");

const router = express.Router();

router.route('/signup').post(registerUser);
router.route('/login');


module.exports = router;