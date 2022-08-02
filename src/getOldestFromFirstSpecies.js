const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employee = data.employees.find((element) => element.id === id);
  const firstSpecies = employee.responsibleFor.find((element) => element[0]);
  const findResidents = species.find((element) => element.id === firstSpecies).residents;
  const ages = findResidents.map((element) => element.age);
  const sortedAges = ages.sort((a, b) => a - b);
  const oldest = findResidents.find((element) => element.age === sortedAges[sortedAges.length - 1]);
  const resultado = Object.values(oldest);
  return resultado;
}
console.log(getOldestFromFirstSpecies('56d43ba3-a5a7-40f6-8dd7-cbb05082383f'));

module.exports = getOldestFromFirstSpecies;
