const { iseven } = require("./14")

function alleven(a) {
    let i = 0
    while (a.length !== i) {
      const thisNumber = a[i]
      if (iseven(thisNumber)=== false) return false 
        i = i + 1
    }
    return true
}

module.exports = { alleven }