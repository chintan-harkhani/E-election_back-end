const { LoginController} = require("../../controller");
const express = require("express");
const router = express.Router();

//login
router.post("/user" ,
LoginController.Login
)
//login list
router.get("/list",
LoginController.LoginList
)
//login id
router.get("/findlogin/:loginId",
    LoginController.LoginId
);

//delete login
router.delete("/delete/:loginId",
    LoginController.DeleteLogin
);
module.exports = router;