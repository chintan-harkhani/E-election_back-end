const joi  =require("joi");

//create user
const CreateLogin = {
    body :joi.object().keys({
        // cardNo : joi.string().trim().pattern(/^[A-Z]{3}[0-9]{7}$/).required(),
        cardNo : joi.string().trim().min(10).max(10).required(),
        name : joi.string().trim().min(5).max(50).required(),
        password : joi.string().min(3).max(10).required(),
    })
};

module.exports = {
    CreateLogin
}