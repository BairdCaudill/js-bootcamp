const { iseven } = require("./14")

function oneeven(a) {
    let i = 0
    while (a.length !== i) {
      const thisNumber = a[i]
      if (iseven(thisNumber)=== true) return true 
        i = i + 1
    }
    return false
}

module.exports = { oneeven }