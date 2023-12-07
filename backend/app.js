const express= require("express");
const ErrorHandler = require("./middleware/Error");
const cors = require("cors")

const app = express();
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
// const fileUpload = require('express-fileupload')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())
app.use("/",express.static("uploads"))
app.use(bodyParser.urlencoded({extended:true}))
// app.use(fileUpload({useTempFile:true}))


//import routes
const user = require("./controller/user")
const shop = require("./controller/shop")

app.use("/api/v2/user",user)
app.use("/api/v2/shop",shop)


if(process.env.NODE_ENV!="production"){
    require("dotenv").config({
        path:"config/.env"
    })
}


//Its for error handling
app.use(ErrorHandler)
module.exports={app}