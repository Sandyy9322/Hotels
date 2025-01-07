const express=require('express')
const router=express.Router();
const  person=require('./../models/person')

router.post('/',async(req,res)=>{
    try{
        const newPersonData=req.body;
        const newPerson=new person(newPersonData);
        //save the new person to the database using await
        const savedPerson=await newPerson.save();

        console.log('saved person to database');
        res.status(200).json(savedPerson);
        
    }catch(error){
        console.error('Error saving person:',error)
        res.status(500).json({error:'internal server error'});
    }
});
router.get('/',async(req,res)=>{
    try{
        const data=await person.find();
        console.log("data fetched")
        res.status(200).json(data);


    }
    catch(err){
        console.log(err)
        res.status(500).json({err:'internal server error'})

    }
})

// here we are creating prameterised api call to take data on the basis of worktype of oerson in hotel data
router.get('/:workType',async (req,res)=>{
    try{
        const workType=req.params.workType;// extract  the workType from url parameter 
        if(workType=='chef'||workType=='manager'||workType=='waiter'){
            const response =await person.find({work:workType});
            console.log('response fetched');
            res.status(200).json(response);

        }else{
            res.status(404).json('invalid worktype');
        }

    }
    catch(err){
        console.error(err);
        res.status(500).json({error:'internal server error'})

    }
})

// update operation here we need to thing 1st is the object id of document and second is data for update,id is passed in parameter and data is passes in body
router.put('/:id',async(req,res)=>{
    try{
    const objectId=req.params.id;// extract id from the url
    const updatePersonData=req.body;//extract updation data from the body
const response =await person.findByIdAndUpdate(objectId,updatePersonData,{
    new:true,//return updated document
    runValidators:true// run mongoose validation like dada is the form of defined schema or model
})
if(!response){
    return res.status(404).json({error:"person not found in database"})
}
console.log("data updated");
res.status(200).json(response);
    }
   

    catch(err){
        console.log(err);
        res.status(500).json({error:'internal server error'});


    }
});

router.delete('/:id',async(req,res)=>{
    try{
        const personId=req.params.id;
    const response= await person.findByIdAndDelete(personId);
    if(!response){
        return res.status(404).json({error:'person not found'});

    }
    console.log("data deleted");
    res.status(200).json({message:'person deleted succeessfully'})

    }
catch(error){
    console.log(error);
    res.status(500).json({error:'internal server error'});

}
    


})

module.exports=router;

