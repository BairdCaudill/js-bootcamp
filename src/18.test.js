const { divisibleby3 } = require("./18")

describe("iseven", () => {
    test("1 off", () => {
        expect(divisibleby3(7)).toEqual(false)
    })
    test("Is divisible by 3", () => {
        expect(divisibleby3(6)).toEqual(true)
    })
})
