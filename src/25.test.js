const { factorial } = require("./25")

describe("factorial", () => {
    test("-1", () => expect(factorial(-1)).toEqual(undefined))
    test("0", () => expect(factorial(0)).toEqual(1n))
    test("1", () => expect(factorial(1)).toEqual(1n))
    test("2", () => expect(factorial(2)).toEqual(2n))
    test("5", () => expect(factorial(5)).toEqual(120n))
    test("15", () => expect(factorial(15)).toEqual(1307674368000n))
    test("78", () => expect(factorial(78)).toEqual(11324281178206297831457521158732046228731749579488251990048962825668835325234200766245086213177344000000000000000000n))
})
