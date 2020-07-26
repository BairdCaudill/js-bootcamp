const { isodd } = require("./15")

describe("isodd", () => {
    test("7 is odd", () => {
        expect(isodd(7)).toEqual(true)
    })
    test("4 is even", () => {
        expect(isodd(4)).toEqual(false)
    })
})
