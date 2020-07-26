const { iseven } = require("./14")

function isodd(a) {
    if (iseven(a) === false) return true
    else return false
}

module.exports = { isodd }