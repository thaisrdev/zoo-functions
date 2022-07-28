const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) { // uso o rest para a função poder receber vários parâmetros
  return species.filter((element) => // esse vai filtrar os elementos que tem o id correspondentes
    ids.some((id) => (element.id === id))); // quero testar se é true que o id que eu colocar como parâmetro vai corresponder com o id do elemento
}

console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));

module.exports = getSpeciesByIds;
