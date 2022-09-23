//Mega sena

/*
    - a pessoa anota 6 numeros de 1 a 60
    - uma sequencia de 6 numeros sorteados
    - se o numero for correspondente da win
*/
// 0   1  2   3   4  5
const numerosEscolhidos = [8, 24, 60, 55, 1, 7]; //6 numeros
let numerosSorteados = [8, 10, 15, 33, 10, 8];

//Faz com que meu array adicione 6 numeros aleatorios
// for (i = 0; i < 6; i+=1) {
//     numerosSorteados.push(Math.floor(Math.random() * 60) +1);
// }

// let vazio = [];

for (a = 0; a < numerosSorteados.length; a += 1) {
  for (b = 0; b < numerosSorteados.length; a += 1) {
    if (numerosSorteados[a] === numerosSorteados[b]) {
      console.log(numerosSorteados[b]);
    }
  }
}

console.log(numerosSorteados);

//Confere se foi gerado os numeros aleatorios
// console.log(numerosSorteados);

let numerosCertos = 0;
let numerosIguais = [];

for (i = 0; i < numerosEscolhidos.length; i += 1) {
  for (o = 0; o < numerosSorteados.length; o += 1) {
    if (numerosEscolhidos[i] === numerosSorteados[o]) {
      numerosCertos += 1;
    }
    if (numerosEscolhidos[i] === numerosSorteados[o]) {
      numerosIguais.push(numerosEscolhidos[i]);
    }
  }
}

if (numerosCertos >= 1) {
  console.log(`Você Acertou o(s) número(s): ${numerosIguais}`);
}

console.log(`Os números escolhidos foram: ${numerosEscolhidos}`);
console.log(`O números sorteados foram: ${numerosSorteados}`);
console.log(`Você acertou ${numerosCertos} numero(s)`);

