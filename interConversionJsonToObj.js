//conversion of JsonString to object 
// Json string is structured format of data and it is a string thats  why it is lightweight to handle and send over the network or between computers
//json is converted to object because it is easy to handle objct to performing operation on that data 
const JsonString ='{"name":"sandip","age":25,"gender":"male"}'
const JsonStringToObj=JSON.parse(JsonString)
console.log(JsonStringToObj)


//conversion of object to JsonString 
const objectTOConvert={name:"sandip",age:25,gender:"male"}
const jsonString=JSON.stringify(objectTOConvert)
console.log(jsonString)