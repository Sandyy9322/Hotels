var os =require('os')
var fs=require('fs')
var user =os.userInfo();
console.log(user)
//console.log(user.username)

fs.appendFile('greeting.txt',"Hii "+user.username,()=>{
    console.log('file is created')
})

//here we can check all the modules which is providedd by node js already we can check all the modules by their all functions or properties on this link:https://nodejs.org/api/ 