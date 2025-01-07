var _=require('lodash')
var data=['person','person',1,1,2,3,2,'name','2']
//here  we are finding unique data from array using lodash library
var result=_.uniq(data)
console.log(result)