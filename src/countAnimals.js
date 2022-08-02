const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const entrada = species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return (acc);
    }, {});
    return entrada;
  }
  if (animal.specie && !animal.sex) {
    const qtdeEspecie = data.species.find(
      (element) => element.name === animal.specie,
    ).residents.length;
    return qtdeEspecie;
  }
  const nomeEspecie = data.species.find((element) => element.name === animal.specie);
  const qtdeResidentes = nomeEspecie.residents.filter(
    (element) => element.sex === animal.sex,
  ).length;
  return qtdeResidentes;
}

module.exports = countAnimals;
