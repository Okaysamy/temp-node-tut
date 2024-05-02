//module

const names = require('./4-forNames')
const sayHi = require('./5-utils')

const data = require('./6-alternativeexpway')
console.log(data)

//this below will work even without saving it ina variable which is the usual
//reason is that when we import a module we invoked it as well
require('./7-mind-grenade')

 sayHi('Susan')
 sayHi(names.john)
 sayHi(names.peter)

 