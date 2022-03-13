const { signupValidation } = require("../utils/validation");

const signup = (req, res, next) => {
    signupValidation(req.body)
    .then(()=>P)

};

module.exports = { signup };
