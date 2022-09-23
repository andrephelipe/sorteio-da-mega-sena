//Mega sena

/*
    - a pessoa anota 6 numeros de 1 a 60
    - uma sequencia de 6 numeros sorteados
    - se o número for correspondente da win e mostra qual ela acertou 
*/
// 0   1  2   3   4  5
const numerosEscolhidos = [8, 24, 60, 55, 1, 7]; //6 numeros
let numerosSorteados = [];

for(i=0; i < 6; i++) {
  let numeros = Math.floor(Math.random() * 60) +1;
  if(numerosSorteados.includes(numeros) == false) {
    numerosSorteados.push(numeros)
  }
}

// console.log(numerosSorteados);

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

