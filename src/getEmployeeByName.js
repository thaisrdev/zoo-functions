// eslint-disable-next-line no-unused-vars
const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // eslint-disable-next-line max-len
  return employees.find((element) => employeeName === (element.firstName || element.lastName));
}
console.log(getEmployeeByName('Nigel'));
console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
