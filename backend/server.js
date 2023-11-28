// Orginal Database
const express = require("express")
const cookieParser = require('cookie-parser');
const cors = require("cors")
const body_parse = require("body-parser")
const db=require("./app/modals/index")
const app = express()

const corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

// middleware
app.use(cors(corsOptions))
app.use(cors())
app.use(express.json())
app.use(body_parse.json());
app.use(express.urlencoded({ extended: true }))
app.use(body_parse.urlencoded({ extended: true }))
app.use(cookieParser());
//port
const PORT = process.env.PORT || 8081


app.get("/",(req,res)=>{
    res.json({message:"Welcome to Backend API"})
})

//server
app.listen(PORT, () => {
  console.log(`server in running on port ${PORT}`)
})

db.sequelize.sync();
db.sequelize.sync({ force: false }).then(() => {
    console.log("Drop and re-sync db.Table Created");
  });

  
// routers
const router = require("./app/routes/overAll_routes")
app.use('/', router)