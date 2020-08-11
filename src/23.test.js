const { isPrime } = require("./23")

describe("isPrime", () => {
  test("1 is not prime", () => expect(isPrime(1)).toEqual(false))
  test("2 is prime", () => expect(isPrime(2)).toEqual(true))
  test("3 is prime", () => expect(isPrime(3)).toEqual(true))
  test("4 is not prime", () => expect(isPrime(3)).toEqual(false))
  test("17 is prime", () => expect(isPrime(17)).toEqual(true))
  test("43 is prime", () => expect(isPrime(43)).toEqual(true))
  test("91 is not prime", () => expect(isPrime(91)).toEqual(false))
  test("100 is not prime", () => expect(isPrime(100)).toEqual(false))
  test("101 is prime", () => expect(isPrime(101)).toEqual(true))
})
