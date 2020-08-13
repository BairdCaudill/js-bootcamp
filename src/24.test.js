const { fibonacci } = require("./24")

describe("fibonacci", () => {
    test("5", () => {
        expect(fibonacci(5)).toEqual([1n, 1n, 2n, 3n, 5n])
    })

    test("100", () => {
        const result = fibonacci(100)
        const lastNumber = result[99]
        expect(lastNumber).toEqual(354224848179261915075n)
    })
})