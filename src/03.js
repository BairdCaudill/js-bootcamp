const prompt = require('prompt-sync')()

const firstname = prompt("What is your first name? > ")
const space = (" ")
const lastname = prompt("What is your last name? > ")

console.log("Hello, " + firstname + space + lastname)