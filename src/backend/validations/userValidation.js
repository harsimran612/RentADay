const {body} = require("express-validator");
const {validationResultsCheck} = require("./util");

const userLoginValidators = [
    body("email").isEmail(),
    body("password").notEmpty().isLength({ min: 8, max: 25 })
        .withMessage("Password length should be in range 8 to 25, inclusive"),
    validationResultsCheck
]

const userRegisterValidators = [
    body("name").notEmpty(),
    body("email").isEmail(),
    body("password").notEmpty().isLength({ min: 8, max: 25 })
        .withMessage("Password length should be in range 8 to 25, inclusive"),
    validationResultsCheck
]

module.exports = {userLoginValidators, userRegisterValidators};