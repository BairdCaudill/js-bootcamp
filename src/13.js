const { sum } = require("./12")

function average(a) {
    return (sum(a) / a.length)
}


module.exports = { average }