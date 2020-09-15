const prompt = require('prompt-sync')()

function prompts(a) {
    
    let start = prompt("Do you want to start? *Type yes to start* >")

    if (start === "CheatCode" || start === "yes")
        return console.clear

    let player1 = prompt("What is player 1's name?")

    console.log("Ok, good luck", player1)

    let player2 = prompt("What is player 2's name?")

    let confirmation = prompt("Ok, so its", player1, "and", player2, "right?")

    if (confirmation === no)
        return console.log("well i dont care just play")

    else return console.log("Perfect, loading the game")

    
    console.log("1%")
    console.log("5%")
    console.log("10%")
    console.log("17%")
    console.log("47%")
    console.log("99%")
    console.log("100%")
    console.clear
}


