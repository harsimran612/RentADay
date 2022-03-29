const {validationResult} = require("express-validator");

const validationResultsCheck = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const extractedErrors = []
        errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
        return res.status(400).json({
          'success': false,
          'message': "Validation errors",
          'data': null
        })
    }
    next();
}

module.exports = {validationResultsCheck};