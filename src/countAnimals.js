const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
// return species.find((element) => element.residents.length).find((element) => element.name === animal)
  return species;
}
console.log(countAnimals('lions'));

module.exports = countAnimals;

// Implemente a função countAnimals que deverá contabilizar a quantidade de espécies de animais residentes no zoológico.

// A função countAnimals é responsável por contar a quantidade de animais que residem no zoológico.

// Retorne a quantidade de animais residentes por espécie caso não seja passado nenhum parâmetro.
//  O retorno deverá ser um objeto cujo o nome de cada espécie é a chave e o total de animais (residentes) dessa espécie é o valor. Por exemplo:

//   {
//     lions: 4,
//     // [...]
//   }
// Retorne a quantidade de animais residentes no zoológico da espécie passada por parâmetro. Por exemplo:

// ao receber o argumento { specie: 'penguins' }, retorna apenas a quantidade (número) de pinguins que residem no zoológico;

// ao passar o argumento { specie: 'giraffes', sex: 'female' }, retorna apenas a quantidade (número) de girafas fêmeas que residem no zoológico.
