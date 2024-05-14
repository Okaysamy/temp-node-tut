//this module allows us interact with the file path easily which we cant do on vanila js
const path = require('path')
//the 'sep'property returns my platforms specific seperator ,thst is either '/' or '\',depending on the platform
console.log(path.sep)

//this joins a sequence of path segments using the path seperator
const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

//this is used to get the last part of the filepath
const base = path.basename(filePath)
console.log(base)

//This returns an absolute path which ofcourse we would have to be providing at some point in our projects
//Another use of this is that our application is going to run in a different environment 
//and the path to some of the resource is going to be different
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

//note that theres more to learn under path module for this is just a bit of its many

