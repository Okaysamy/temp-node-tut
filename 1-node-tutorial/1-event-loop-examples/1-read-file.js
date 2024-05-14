const { readFile } = require('fs')

console.log('started a first task')
//T check the file path
readFile('./content/first.txt','utf8', (err, result) => {
    if(err) {
        console.log(err)
        return
    }

    console.log(result)
    console.log('task is completed')
})
console.log('starting next task')