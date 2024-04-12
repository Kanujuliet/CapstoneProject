const express = require("express");
const router = express.Router();
const {insertUser} = require('../controller/userdataCtl');


router.post("/register", insertUser);
router.get("/signin", signin);

module.exports =(router);