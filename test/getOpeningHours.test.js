/* eslint-disable sonarjs/no-duplicate-string */
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Testa se não passando argumentos a função retorna o seguinte objeto', () => {
    expect(getOpeningHours()).toMatchObject({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });
});
it('checa se o argumento Monday e 09:00-AM retorna a string "The zoo is closed"', () => {
  expect(getOpeningHours('Monday', '09:00-AM')).toEqual('The zoo is closed');
});
it('checa se o argumento Tuesday e 09:00-AM retorna a string "The zoo is open"', () => {
  expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual('The zoo is open');
});
it('checa se o argumento Wednesday e 09:00-PM retorna a string "The zoo is closed"', () => {
  expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual('The zoo is closed');
});
it('checa se o argumento Thursday e 09:00-AM retorna a string "The zoo is closed"', () => {
  expect(getOpeningHours('Thursday', '09:00-AM')).toEqual('The zoo is closed');
});
it('checa se o argumento Friday e 09:00-AM retorna a string "The zoo is closed"', () => {
  expect(getOpeningHours('Friday', '09:00-AM')).toEqual('The zoo is closed');
});
it('checa se o argumento Sunday e 09:00-AM retorna a string "The zoo is open"', () => {
  expect(getOpeningHours('Sunday', '09:00-AM')).toEqual('The zoo is open');
});
it('checa se o argumento Sunday e 09:00-AM retorna a string "The zoo is open"', () => {
  expect(getOpeningHours('Sunday', '09:00-AM')).toEqual('The zoo is open');
});
