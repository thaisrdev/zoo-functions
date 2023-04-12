const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function formatacao(parametro) {
  const empl = employees.find((element) => (
    element.id === parametro.id) || (element.firstName === parametro.name)
    || (element.lastName === parametro.name));
  if (empl === undefined) {
    throw new Error('Informações inválidas');
  }
  const especies = empl.responsibleFor.map((element) => species.find((el) => el.id === element));
  const especiesNome = especies.map((element) => element.name);
  const localizacao = especies.map((element) => element.location);
  const resultado = {
    id: empl.id,
    fullName: `${empl.firstName} ${empl.lastName}`,
    species: especiesNome,
    locations: localizacao,
  };
  return resultado;
}

function getEmployeesCoverage(parametro) {
  const resultadoTotal = employees.map((element) => formatacao(element));
  if (parametro === undefined) {
    return resultadoTotal;
  } if (parametro.id || parametro.name) {
    return formatacao(parametro);
  }
}
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
