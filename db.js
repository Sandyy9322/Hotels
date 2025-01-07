const mongoose=require('mongoose')
require('dotenv').config()
//mongodb connection url
//const mongoURL='mongodb://127.0.0.1:27017/hotels'
//const mongoURL="mongodb+srv://awalesandip436:Sandip9322@sandip.hkadr.mongodb.net/"
const mongoURL=process.env.MONGODB_URL;
// set up mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

//get the default connection
//mongoose maintain a default connection object representing the mongodb connection
const db=mongoose.connection;

// define event listeners for database connection 
db.on('connected',()=>{
    console.log('connected to mongodb server');
});
db.on('error',(err)=>{
    console.log("Mongodb connection error:",err);
});
db.on("disconnected",()=>{
    console.log("mongodb disconnected");
});

// export the database connection
module.exports=db;