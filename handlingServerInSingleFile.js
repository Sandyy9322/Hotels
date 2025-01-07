const notes=require('./support.js')
//here we are importing the supporting sever file into in this main server file and it will run the all the functions of supportive file into the server using this main file 
console.log(notes.age)

var result=notes.ageSum(notes.age,15)
console.log(result)   