class Game {
  constructor() {
    this.rows = [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ]
  }

  print() {
    const printCell = cell => {
      if (cell === 0) return '.'
      else if (cell === 1) return 'O'
      else if (cell === 2) return 'X'
      else
        throw new Error(
          'Each cell should be either 0, 1, or 2. I do not know what to do with ' + cell
        )
    }

    const printRow = row => {
      return row.map(printCell).join(' ')
    }

    const printedBoard = this.rows.map(printRow).join('\n')

    return printedBoard
  }
  place() {}
  check() {}
}

module.exports = { Game }
