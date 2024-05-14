const os = require('os')

//ACTIVITY:Getting info about current user
const user = os.userInfo()
console.log(user)

//To get(methd returns the systems uptime in seconds)how long the system has been running
console.log(`The system uptime is ${os.uptime()} seconds`)

//To get current os details
const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)