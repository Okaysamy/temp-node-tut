//This her is a method using Node to read files and create one from the scratch
//we are starting with syncronous and later we see the asyncronous
const {readFileSync, writeFileSync} = require('fs')

console.log('start')

//The readFileSync is a method that reads file and in that method we need to provide two parameters:the path to
//that specific file and its encoding; node ofcourse knows how to decode the file.Generally we go with utf8

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

//console.log(first, second)

//The writeFileSync is used to create a new file from the scratch
//Note: if the file is not there node will create one and if its there node will override by 
//default all the value that is in the file
//We can setup a third arguement "flag:'a'" which appends the text
writeFileSync('./content/result-sync.txt',`here is the result: ${first}, ${second} `, {flag:'a'})
console.log('done with this task')
console.log('starting the next one')

