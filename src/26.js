//Take n(7) and half it(3.5), then say its too high, half the number inbetween 3.5 and 0, 
//do this every time and round your result of your squaring to the nearest 5 decimals until you 
//have it!

const squareroot = n => {
    if (n < 0) return undefined
    let min = 0
    let max = n
    if (n < 0) {
        min = n
        max = 1
    }
    let checker = 0
    let guess = 0
    let previousGuess
    while (checker !== n // until we find the number
        && previousGuess !== guess // or until we start repeating ourselves
    ) {
        previousGuess = guess
        guess = (min + max) / 2
        checker = guess * guess
        if (checker > n) max = guess
        if (checker < n) min = guess
    }
    return guess
}

module.exports = { squareroot }
