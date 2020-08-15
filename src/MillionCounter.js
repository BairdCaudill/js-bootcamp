function million() {
    let i = 0
    while (i < 1000000000) {
        i = i + 1
        console.log(i)
    }
    return i
}

console.time('million')
console.log(million())
console.timeEnd('million')