const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) { return {}; }
  return employees.find((element) => (
    employeeName === element.firstName) || (employeeName === element.lastName));
}
console.log(getEmployeeByName('Nigel'));
console.log(getEmployeeByName('Elser'));

module.exports = getEmployeeByName;
