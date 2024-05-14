const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World!')
})
//here we have server listening on port 5000 and
//anytime a request comes in we invoke the callback
//and in the callback we console.log 'request event' and 
//send back 'Hello World'

server.listen(5000, () => {
    console.log('Server is listening on port: 5000....')
})
//this callback is for when we are setting up the server
//know that the process stays alive because
//.listen is asynchronous