const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('checa se o argumento count retorna a quantidade de elefantes', () => {
    expect(handlerElephants('count')).toEqual(4);
  });
  it('checa se argumento names retorna um array com a relação dos nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(expect.arrayContaining(['Ilana', 'Orval', 'Bea', 'Jefferson']));
  });
  it('checa se o argumento averageAge retorna a média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
  it('checa se o argumento location retorna a localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('checa se argumento popularity retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toEqual(5);
  });
  it('checa se o argumento availability retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(expect.arrayContaining(['Friday', 'Saturday', 'Sunday', 'Tuesday']));
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Retorna mensagem quando parâmetro não é string', () => {
    expect(handlerElephants(10)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Não passando argumentos a função deve retornar undefined', () => {
    expect(handlerElephants('')).toBeNull();
  });
});
