//this is asynchronous
const{readFile, writeFile} = require('fs')

console.log('start')
readFile('./content/first.txt','utf8',(err, result) => {
        if(err){
            console.log(err)
            return
        }
        const first = result

            readFile('./content/second.txt','utf8',(err,result) => {
                if(err){
                    console.log(err)
                    return
                }
                const second = result

                    writeFile('./content/result-async.txt',
                    `Here is the result: ${first}, ${second}`,
                    (err,result) => {
                        if(err){
                            console.log(err)
                            return
                        }
                        //console.log(result) Note:since this will give us undefined we have it commented
                        console.log('done with this task')
                    }
                )
            }
        )
    }
)
console.log('starting next task')