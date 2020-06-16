const prompt = require('prompt-sync')()


firstnumber = prompt ("Whats your first number? > ")

secondnumber = prompt ("Whats your second number > ")

const message = `${firstnumber} x ${secondnumber} = ${firstnumber * secondnumber}`;

console.log(message)