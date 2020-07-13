const prompt = require('prompt-sync')({ sigint: true })

console.clear()

mynumber = (Math.round(Math.random() * 100) + 1)

console.log("I have a number!")

let guess

while (mynumber !== guess) {
    guess = + prompt("What is your guess? > ")

    if (mynumber > guess) {
        console.log("Too low!")
    }

    if (mynumber < guess) {
        console.log("Too high!")
    }
}

console.log("You guessed my number!")

