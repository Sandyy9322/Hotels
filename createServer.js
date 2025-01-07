const express=require('express')
const app=express()
const dba=require('./db')
const person=require('./models/person')
const bp=require('body-parser')
const bodyParser = require('body-parser')
require('dotenv').config()
const PORT=process.env.PORT || 3000;
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.send("hello, welcomme sandip")
})
// app.get('/awale',(req,res)=>{
//     res.send("welcome awale")
// })

// app.get('/personalInfo',(req,res)=>{
//     const info={
//         name:"sandip",
//         age:19
//     };
//     res.send(info)
// })
// app.post('/sandyy',(req,res)=>{
//     res.send("data saved");
// })

// app.post('/person',async(req,res)=>{
//     try{
//         const newPersonData=req.body;
//         const newPerson=new person(newPersonData);
//         //save the new person to the database using await
//         const savedPerson=await newPerson.save();

//         console.log('saved person to database');
//         res.status(200).json(savedPerson);
        
//     }catch(error){
//         console.error('Error saving person:',error)
//         res.status(500).json({error:'internal server error'});
//     }
// });
// app.get('/person',async(req,res)=>{
//     try{
//         const data=await person.find();
//         console.log("data fetched")
//         res.status(200).json(data);


//     }
//     catch(err){
//         console.log(err)
//         res.status(500).json({err:'internal server error'})

//     }
// })

// // here we are creating prameterised api call to take data on the basis of worktype of oerson in hotel data
// app.get('/person/:workType',async (req,res)=>{
//     try{
//         const workType=req.params.workType;// extract  the workType from url parameter 
//         if(workType=='chef'||workType=='manager'||workType=='waiter'){
//             const response =await person.find({work:workType});
//             console.log('response fetched');
//             res.status(200).json(response);

//         }else{
//             res.status(404).json('invalid worktype');
//         }

//     }
//     catch(err){
//         console.error(err);
//         res.status(500).json({error:'internal server error'})

//     }
// })

// import the routes file 
const personRoutes=require('./routes/personRoutes')
app.use('/person',personRoutes)
app.listen(PORT,()=>{
    console.log("Listening on port 3001")
})