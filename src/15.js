const { iseven } = require("./14")

function isodd(a) {
    return !iseven(a) 
}

module.exports = { isodd }