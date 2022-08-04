const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeesCoverage(parametro) {
  if (parametro.id) {
    const employee = employees.find((element) => element.id === (parametro.id));
    const especies = employee.responsibleFor.map((element) => species.find(
      (specie) => specie.id === element,
    ));
    const especiesNome = especies.map((element) => element.name);
    const localizacao = especies.map((element) => element.location);

    const objeto = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: especiesNome,
      locations: localizacao,
    };
    return objeto;
  }
}
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
