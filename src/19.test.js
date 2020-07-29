const { divisibleby5 } = require("./19")

describe("divisibleby5", () => {
    test("1 off", () => {
        expect(divisibleby5(11)).toEqual(false)
    })
    test("Is divisible by 5", () => {
        expect(divisibleby5(10)).toEqual(true)
    })
})
