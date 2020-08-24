const { Game } = require('./connect4')

describe('Game', () => {
  describe('print', () => {
    test('empty', () => {
      const game = new Game()
      expect(game.print().trim()).toEqual(
        `
. . . . . . .
. . . . . . .
. . . . . . .
. . . . . . .
. . . . . . .
. . . . . . .
      `.trim()
      )
    })

    test('1', () => {
      const game = new Game()
      game.rows = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [2, 2, 1, 1, 0, 0, 0],
      ]
      expect(game.print().trim()).toEqual(
        `
. . . . . . .
. . . . . . .
. . . . . . .
. . . . . . .
. O X . . . .
X X O O . . .
      `.trim()
      )
    })

    test('2', () => {
      const game = new Game()
      game.rows = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [2, 2, 1, 1, 1, 0, 0],
      ]
      expect(game.print().trim()).toEqual(
        `
. . . . . . .
. . X . . . .
. . X . . . .
. O X . . . .
. O X . . . .
X X O O O . .
      `.trim()
      )
    })
  })

  describe('check', () => {
    test('empty', () => {
      const game = new Game()
      expect(game.check()).toEqual(0)
    })

    test('game in progress', () => {
      const game = new Game()
      game.rows = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [2, 2, 1, 1, 0, 0, 0],
      ]
      expect(game.check()).toEqual(0)
    })

    test('2 wins', () => {
      const game = new Game()
      game.rows = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 0, 2, 0, 0, 0, 0],
        [0, 2, 2, 0, 0, 0, 0],
        [0, 1, 2, 0, 0, 0, 0],
        [2, 2, 1, 1, 1, 0, 0],
      ]
      expect(game.check()).toEqual(2)
    })
  })
})
