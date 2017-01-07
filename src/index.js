import uniqueRandomArray from 'unique-random-array';
import italianNames from './nomi-italiani.json';

var getRandomNames = uniqueRandomArray(italianNames);
// Esporto un oggetto - uso CommonJS per i moduli
export default {
  all: italianNames,
  random: random
};

function random(number){
  if (number === undefined){
    return getRandomNames();
  } else {
    var randomNames =[];
    for(var i = 0; i < number; i++){
      randomNames.push(getRandomNames());
    }
    return randomNames;
  }
}