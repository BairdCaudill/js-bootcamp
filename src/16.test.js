const { alleven } = require("./16")

describe("alleven", () => {
    
    test("All Even :D!", () => {
        expect(alleven([2,4,8,100])).toEqual(true)
    })
    test("One odd :|!", () => {
        expect(alleven([1,4,8,100])).toEqual(false)
    })
    test("All Odd D:!", () => {
        expect(alleven([1,3,7,11])).toEqual(false)
    })
    
})

