const { Deck } = require('./27')

describe('Deck', () => {
  test('count', () => {
    const d1 = new Deck()
    expect(d1.count()).toEqual(52)
  })
})
