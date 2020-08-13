const prompt = require('prompt-sync')()
const { fibonacci } = require("./24")

function showBigIntArray(arrayToShow) {
    for (let x of arrayToShow) {
        console.log(x.toString())
    }
}

console.clear()

console.log('Welcome to my super duper Fibonacci number generator')
const n = prompt('How many numbers in the sequence would you like to calculate? ')

const result = fibonacci(n)
showBigIntArray(result)
console.log()