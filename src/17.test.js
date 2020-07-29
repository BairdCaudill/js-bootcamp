const { oneeven } = require("./17")


 test("All Even :D!", () => {
        expect(oneeven([2,4,8,100])).toEqual(true)
    })
    test("One Even :|!", () => {
        expect(oneeven([1,3,7,10])).toEqual(true)
    })
    test("All Odd D:!", () => {
        expect(oneeven([1,3,7,11])).toEqual(false)
    })
   