const { iseven } = require("./14")

describe("iseven", () => {
    test("7 is odd", () => {
        expect(iseven(7)).toEqual(false)
    })
    test("4 is even", () => {
        expect(iseven(4)).toEqual(true)
    })
})

