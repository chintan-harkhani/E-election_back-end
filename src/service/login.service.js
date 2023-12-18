const { LoginModel } = require("../model");

//create user
const CreateLogin = async (reqBody) => {
    return LoginModel.create(reqBody)
};
const Findname = async (cardNo) => {
    return LoginModel.findOne({ cardNo });
}
// user list
const loginList = async (req, res) => {
    return LoginModel.find()
};
//login id
const loginId = async (loginId) => {
    return LoginModel.findById(loginId)
};
//delete login user
const Deletelogin = async (loginId) => {
    return LoginModel.findByIdAndDelete(loginId)
};
//module export
module.exports = {
    CreateLogin,
    Findname,
    loginId,
    loginList,
    Deletelogin,

}