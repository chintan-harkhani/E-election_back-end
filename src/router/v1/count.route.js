const { CountController } = require("../../controller");
const express = require("express");
const router = express.Router();

//vote list
router.get("/BJP" ,
CountController.BJPList
)
router.get("/BJPcount" ,
CountController.BJPListCount
)
module.exports =router;