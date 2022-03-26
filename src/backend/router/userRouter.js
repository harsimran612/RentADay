const express = require("express");
const router = express.Router();
const {registerUser,authUser} = require("../controllers/userController");
const {userLoginValidators, userRegisterValidators} = require("../validations/userValidation");

router.post('/', userRegisterValidators, registerUser);
router.post('/login', userLoginValidators, authUser);

module.exports = router;