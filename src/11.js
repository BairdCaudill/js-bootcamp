function sum(a) {
    let result = 0
    let i = 0
    while (a.length !== i) {
        result = result + a[i]
        i = i + 1
    }
    return result
}

console.log(sum([4, 7]))
console.log(sum([6, 8, 10]))
console.log(sum([8, 1, 10, 50]))







// Starting out, our sum is zero
// Start with the first item in the array (0th)
// add it to our sum
// Keep doing that until we get to the last number

