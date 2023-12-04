const mongoose = require("mongoose")

const connectDatabase = ()=>{
    mongoose.connect(process.env.MONGO_URL).then((data)=>{
        console.log("mongo db connected with server: ",data.connection.host)
    })
}

module.exports={connectDatabase}