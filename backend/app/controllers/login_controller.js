// Table connections sequelize functions
const db=require("../modals/index");
const { Op } = require('sequelize');
// Table Connection
const userLoginss=db.userLogin;
const dotenv=require('dotenv')
dotenv.config();

//Login credentials

const login=async(req,res)=>{
     try{
        const {us_name,us_email,us_city}=req.body;
        const users=await userLoginss.create({
             us_name:us_name,
             us_email:us_email,
             us_city:us_city
        })
        if(users){
             console.log(users);
             return res.send(users)
        }
        else{
             console.log("Failed to connect logined")
             return res.send({error:"Failed to connected"})
        }
     }
     catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'error', message: 'An error occurred' });
      }

}

module.exports={login}