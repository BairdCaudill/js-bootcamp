const { squareroot } = require("./26")

describe("squareroot", () => {
    test("-1", () => expect(squareroot(-1)).toEqual(undefined))
    // test("0.25", () => expect(squareroot(0.25)).toEqual(0.50))
    test("0", () => expect(squareroot(0)).toEqual(0))
    test("7", () => expect(squareroot(7)).toEqual(2.6457513110645907))
    test("9", () => expect(squareroot(9)).toEqual(3))
})