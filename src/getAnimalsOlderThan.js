const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((element) => element.name === animal).residents.every(
    (resident) => resident.age >= age,
  );
}

console.log(getAnimalsOlderThan('lions', 7));
console.log(getAnimalsOlderThan('tigers', 19));

module.exports = getAnimalsOlderThan;
