const { average } = require("./13")

test("average", () => {
    expect(average([10, 30, 20])).toEqual(20)
    expect(average([10])).toEqual(10)
    expect(average([-20, -30, -10])).toEqual(-20)
    expect(average([2, 3, 4, 5])).toEqual(3.5)
})

