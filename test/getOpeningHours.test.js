const getOpeningHours = require('../src/getOpeningHours');

const closed = 'The zoo is closed';
const open = 'The zoo is open';

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
  it('checa se o argumento Monday e 09:00-AM retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(closed);
  });
  it('checa se o argumento Tuesday e 09:00-AM retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toEqual(open);
  });
  it('checa se o argumento Wednesday e 09:00-PM retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toEqual(closed);
  });
  it('checa se o argumento Thursday e 09:00-AM retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Thursday', '09:00-AM')).toEqual(closed);
  });
  it('checa se o argumento Friday e 09:00-AM retorna a string "The zoo is closed"', () => {
    expect(getOpeningHours('Friday', '09:00-AM')).toEqual(closed);
  });
  it('checa se o argumento Sunday e 09:00-AM retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toEqual(open);
  });
  it('checa se o argumento Sunday e 09:00-AM retorna a string "The zoo is open"', () => {
    expect(getOpeningHours('Sunday', '09:00-AM')).toEqual(open);
  });
  it('checa se função não faz diferenciação entre maiúsculas e minúsculas', () => {
    expect(getOpeningHours('sunday', '09:00-AM')).toEqual(open);
  });
  it('Para os argumentos Saturday e C9:00-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Saturday', 'cb:00-AM')).toThrowError(new Error('The hour should represent a number'));
  });
  it('Para os argumentos Sunday e 09:c0-AM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrowError(new Error('The minutes should represent a number'));
  });
  it('Para os argumentos Friday e 09:00-ZM deve lançar uma exceção com a mensagem: "The hour should represent a number"', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });
  it('Para os argumentos com hora maior que 12 deve lançar uma exceção com a mensagem: "The hour must be between 0 and 12"', () => {
    expect(() => getOpeningHours('Friday', '15:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });
  it('Para os argumentos com minutos maiores que 59 deve lançar uma exceção com a mensagem: "The minutes must be between 0 and 59"', () => {
    expect(() => getOpeningHours('Friday', '09:75-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });
  it('Para os argumentos com dias não pertencentes ao array weekDays, lançar erro', () => {
    expect(() => getOpeningHours('Sexta', '09:75-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });
});
