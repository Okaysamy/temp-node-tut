//we wanna create relative functiionality
//that is we can have a function in a module called in a target module as a
//third party module even without writing 'module.exports' and it'll work

/*
const num1 = 5
const num2 = 10

function addValues() {
    console.log(`the sum is: ${num1 + num2}`)
}
addValues()
*/

            //OR the destructured 

const num1 = 5
const num2 = 10

const added = (addValues) => {
    console.log(`The sum is:${num1 + num2}`)
}

added()