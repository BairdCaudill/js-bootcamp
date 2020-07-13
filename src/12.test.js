const { sum } = require("./12")

test("sum", () => {
    expect(sum([4, 7])).toEqual(11)
    expect(sum([6, 8, 10])).toEqual(24)
    expect(sum([8, 1, 10, 50])).toEqual(69)
})

