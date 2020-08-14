const factorial = n =>
    n < 0 ? undefined :
        n === 0 ? 1n :
            BigInt(n) * factorial(n - 1)

module.exports = { factorial }