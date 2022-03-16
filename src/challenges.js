// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(string2 = []) {
  // eslint-disable-next-line prefer-rest-params
  return (string2[string2.length - 1], string2[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
  // eslint-disable-next-line prefer-rest-params
  let maior = Math.max.apply(...arguments, array);
  let result = [];
  for (let d = 0; d < array.length; d += 1) {
    if (array[d] === maior) {
      result.push(0);
    }
  }
  return (result.length);
}

// Desafio 7
function catAndMouse() {
  // let distancia1= math.abs()
  // let distancia = [];
  // for (p=0; p < distancia; p +=1) {
  //  if ()
  // }
}

// Desafio 8
function fizzBuzz(array2) {
  let result2 = [];
  for (let n = 0; n < array2.length; n += 1) {
    if (array2[n] % 3 === 0) {
      if (array2[n] % 5 === 0) {
        result2[n] = 'fizzBuzz';
      } else {
        result2[n] = 'fizz';
      }
    } else if (array2[n] % 5 === 0) {
      result2[n] = 'buzz';
    } else {
      result2[n] = 'bug!';
    }
  }
  return (result2);
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(materias, pessoa) {
  let materiasOrdenada = materias.sort();
  let saida = [];
  if (materias.length === 0) {
    return ('Vazio!');
  }

  for (let o = 0; o < materiasOrdenada.length; o += 1) {
    saida.push({ tech: materiasOrdenada[o], name: pessoa });
  }
  return (saida);
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
