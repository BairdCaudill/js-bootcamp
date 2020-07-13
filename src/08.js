const prompt = require('prompt-sync')()

console.clear()

let count = 0

while (count < 100) {
   (console.log(Math.floor(Math.random() * 8999) + 1000))
    count = count + 1
}
