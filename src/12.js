function sum(a) {
    let answer = 0
    let i = 0
    while (a.length !== i) {
        answer = answer + a[i]
        i = i + 1
    }
    return answer
}


module.exports = { sum }