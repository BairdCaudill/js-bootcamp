const prompt = require('prompt-sync')()

console.clear()

country = prompt("Where are you from > ")
age = prompt("How old are you > ")


if (canVote(age, country) === false) {
    console.log("you are not old enough to vote")
}
else {
    console.log("You are old enough to vote")
}

function canVote(age, country) {
    if (country === "spain") {
        if (age < 18) {
            return false
        }
        else {
            return true
        }
    }
    if (country === "US") {
        if (age < 21) {
            return false
        }
        else {
            return true
        }
    }
}

