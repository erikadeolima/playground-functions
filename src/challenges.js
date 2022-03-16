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
function concatName(string2) {
  let nome = string2[string2.length - 1] + ', ' + string2[0];
  return (nome);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + (ties * 1));
}

// Desafio 6
function highestCount(array) {
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
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(cat1 - mouse);
  let distancia2 = Math.abs(cat2 - mouse);
  if (distancia2 < distancia1) {
    return ('cat2');
  // eslint-disable-next-line no-else-return
  } else if (distancia2 === distancia1) {
    return ('os gatos trombam e o rato foge');
  } else return ('cat1');
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
