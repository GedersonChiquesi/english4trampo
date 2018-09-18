const fs = require("fs")
const infile = __dirname + '/english4Trampo.txt'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const list = fs
    .readFileSync(infile, 'utf8')
    .split("\n")
    .map(function (e) { return e.trim() })
    .filter(function (e) { return (e.length > 0) })
    .filter(function (e) { return e.charAt(0) !== '#' })
    .sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });

module.exports = {
    list,
    getRandomIntInclusive,
    random: function random(){
        const i = getRandomIntInclusive(0, (list.length-1));
        return list[i];
    }
}
