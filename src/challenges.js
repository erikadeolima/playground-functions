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
function concatName(string = []) {
  return (`${string[string.length - 1]}, ${string[0]}`);
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
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
