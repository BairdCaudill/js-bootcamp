const { divisiblebyN } = require("./20")

describe("divisiblebyN", () => {
    test("1 is divisible by 1", () => {
        expect(divisiblebyN(1, 1)).toEqual(true)
    })
    
    test("2 is not divisible by 4", () => {
        expect(divisiblebyN(2, 4)).toEqual(false)
    })
})
