const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
const employee = data.employees.find((element) => element.id === id);
const firstSpecies = employee.responsibleFor.find((element) => element[0]);
const findResidents = data.species.find((element) => element.id === firstSpecies).residents;
const ages = findResidents.map((element) => element.age);
const sortedAges = ages.sort((a, b) => a - b);
const oldest = findResidents.find((element) => element.age === sortedAges[sortedAges.length - 1]);
const resultado = Object.values(oldest);
return resultado;

}
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;