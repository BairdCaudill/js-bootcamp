function sum(a) {
    let result = 0
    let i = 0
    while (a.length !== i) {
        result = result + a[i]
        i = i + 1
    }
    return result
}

module.exports = { sum }