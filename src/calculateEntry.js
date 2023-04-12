const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const contagem = entrants.reduce((acc, { age }) => {
    if (age < 18) {
      acc.child += 1;
    }
    if (age >= 18 && age < 50) {
      acc.adult += 1;
    }
    if (age >= 50) {
      acc.senior += 1;
    }
    return acc;
  }, { child: 0, adult: 0, senior: 0 });

  return contagem;
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }
  const valores = countEntrants(entrants);
  const priceChild = data.prices.child;
  const priceAdult = data.prices.adult;
  const priceSenior = data.prices.senior;
  return ((valores.child * priceChild)
  + (valores.adult * priceAdult) + (valores.senior * priceSenior));
}

module.exports = { calculateEntry, countEntrants };
