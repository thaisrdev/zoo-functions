const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((element) => (element.managers).some((manager) => manager === id));
}

console.log(isManager('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

function getRelatedEmployees(managerId) {
  if ((isManager(managerId) === false)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else if (isManager(managerId) === true) {
    const employee = employees.filter((element) => (element.managers).includes(managerId));
    return employee.map((element) => `${element.firstName} ${element.lastName}`);
  }
}
console.log(getRelatedEmployees('fdb2543b-5662-46a7-badc-93d960fdc0a8'));

module.exports = { isManager, getRelatedEmployees };
