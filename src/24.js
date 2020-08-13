// We make 3 variables, 2 that change from 1 and 1 to 1 and 2 to 2 and 3 to 3 and 5 and so on,
// and one temporary one to hold the result

function fibonacci(n) {
    let i = 1
    let a = 1n  // This is our first variable that will change
    let b = 1n // This is our second
    let c // This is the variable that will hold our answer
    let result = [a, b]
    while (i <= n - 2) {
        i = i + 1
        c = a + b
        b = a
        a = c
        result.push(c)
    }
    return result
}


module.exports = { fibonacci }

