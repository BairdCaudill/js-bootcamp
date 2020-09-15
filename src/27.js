[// 27. Write a `Deck` class that represents a deck of cards. It should start with the cards sorted. It
//     should have methods to shuffle; to deal a hand of four cards; and to count the number of cards
//     left.

//     ```js
//     const cards = new Deck()

//     cards.count()
//     // 52

//     cards.deal()
//     // A♠ 2♠ 3♠ 4♠

//     cards.shuffle()
//     cards.deal()
//     // 4♠ J♥ Q♣ 2♦

//     cards.count()
//     // 44
//     ```

class Deck {
  constructor() {
    let suits = ['♠', '♥', '♣', '♦']
    let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
    this.cards = []
    for (let suit of suits) {
      for (let number of numbers) {
        let card = { number, suit }
        this.cards.push(card)
      }
    }
  }

  count() {
    return this.cards.length
  }

  shuffle() {
    let shuffled = []
    while (this.cards.length > 0) {
      let cardpull = Math.floor(Math.random() * this.cards.length)
      shuffled.push(this.cards[cardpull])
      this.cards.splice(cardpull, 1)
    }
    this.cards = shuffled
  }

  deal(n = 4) {
    let removed = this.cards.splice(0, n)
    return removed
  }
}
// Here we are getting a random number inbetween 0 and our deck size, then we take the card it corresponds to in
// the deck, we copy it to our new deck and we remove it from the old one. We do this untill we have no cards in
// the old deck.
module.exports = { Deck }

console.clear()

let d1 = new Deck()

d1.shuffle()

console.log(d1.deal(8965))
console.log(d1.deal(5))
console.log(d1.deal(5))
console.log(d1.deal(5))

console.log(d1.count())
