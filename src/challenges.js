// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}
// console.log(compareTrue(false,true));
// console.log(compareTrue(false,false));
// console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}
// console.log(calcArea(10,50));
// console.log(calcArea(5,2));
// console.log(calcArea(51,1));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// console.log(splitSentence("go Trybe"));
// console.log(splitSentence("vamo que vamo"));
// console.log(splitSentence("foguete"));

// Desafio 4
function concatName(string2 = []) {
  return (`${string2[string2.length - 1]}, ${string[0]}`);
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}
// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let maior = Math.max.apply(...arguments, array);
  let result = [];
  for (d=0;d<array.length;d+=1) {
    if (array[d] == maior){
      result.push(0);
    }
  }
  return (result.length);
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array2) {
  let result2 = [];
  for (n=0;n < array2.length;n+=1) {
    if (array2[n]%3 === 0){
      if (array2[n]%5 === 0){
        result2[n] = "fizzBuzz";
      } else {
        result2[n] = "fizz";
      }
    } else if (array2%5 === 0) {
        result2[n] = "buzz"; 
      } else {
        result2[n] = "bug!";
      }
    }
  return(result2);
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9] ));
//console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
