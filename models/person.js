const mongoose=require('mongoose')
// creating schema for person detail 
const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','waiter','manager'],
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    }

});
//  creating a model of a person
const person=mongoose.model('person',personSchema);
module.exports=person;

