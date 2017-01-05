var uniqueRandomArray = require('unique-random-array');
var italianNames =require('./nomi-italiani.json');
// Esporto un oggetto - uso CommonJS per i moduli
module.exports = {
  all: italianNames,
  random: uniqueRandomArray(italianNames)
};