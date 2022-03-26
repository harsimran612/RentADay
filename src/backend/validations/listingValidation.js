const {body, validationResult} = require("express-validator");

const validationResultsCheck = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
        return res.status(400).json({
          errors: extractedErrors,
        })
    }
    next();
}
const newListingValidators = [
    body("title").notEmpty(),
    body("category").isIn(["studio", "house", "garage", "garden"]),
    body("condition").optional().isString(),
    body("address").notEmpty(),
    body("date").isDate("DD-MM-YYYY"),
    body("time").matches(/^([01]?[0-9]|2[0-3]):[0-5][0-9]$/),
    body("price").isNumeric(),
    body("phoneNumber").isMobilePhone(),
    body("email").isEmail(),
    validationResultsCheck
]
module.exports = {
    newListingValidators
}