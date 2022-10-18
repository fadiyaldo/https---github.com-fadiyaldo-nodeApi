const router = require("express").Router();
const User = require("../models/User");

router.get("/usertest",  (req, res)=>{
    res.send("user test is successfull");
})
module.exports = router;