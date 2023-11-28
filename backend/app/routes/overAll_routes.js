//Routing concept
const express=require("express");
const router=express.Router();
const user_login=require('../controllers/login_controller');





router.post('/logins',user_login.login);

module.exports=router;