const prompt = require('prompt-sync')()

console.clear()

temp = prompt("What temperature is it? > ")
type = prompt("F or C? > ")

if (type === "c") {
    console.log("In F your temperature is " + Math.round(temp / 5 * 9 + 32))
}


if (type === "f") {
    console.log("In C your temperature is " + Math.round(( temp - 32 )* 5 / 9))
}