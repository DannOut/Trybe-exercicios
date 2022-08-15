const service = require('./service');

describe('Testando se as funções do arquivos service.js funcionam conforme esperado', () => {
  // randomNumberGenerator = jest.fn().mockReturnValue(10);

  // Outra forma de fazer // necessário importar/exportar a função
  const randomNumberGenerator = jest.spyOn(service, 'randomNumberGenerator');
  randomNumberGenerator.mockReturnValue(10);

  test('A função randomNumberGenerator é chamada', () => {
    randomNumberGenerator();
    randomNumberGenerator();

    expect(randomNumberGenerator).toHaveBeenCalled();
    expect(randomNumberGenerator).toHaveBeenCalledTimes(2);
  });

  test('A função randomNumberGenerator retorna o esperado', () => {
    expect(randomNumberGenerator()).toEqual(10);
  });

  test('A função randomNumberGenerator não é chamada nenhuma vez', () => {
    randomNumberGenerator.mockReset();
    expect(randomNumberGenerator).toHaveBeenCalledTimes(0);
  });

  test('utilizando a função randomNumberGenerator, retorne a divisão de dois parâmetros', () => {
    // service.randomNumberGenerator = jest.fn().mockImplementationOnce((a, b) => a / b);
    // expect(service.randomNumberGenerator(10, 2)).toBe(5);

    const randomNumberDivision = jest
      .spyOn(service, 'randomNumberGenerator')
      .mockImplementation((a, b) => a / b);

    expect(randomNumberDivision(10, 2)).toBe(5);
    expect(randomNumberDivision(12, 6)).toBe(2);
    expect(randomNumberDivision(2, 10)).toBe(0.2);
    expect(randomNumberDivision(-100, 10)).toBe(-10);
  });

  test('utilizando a função randomNumberGenerator, retorne a multiplicação de três parâmetros', () => {
    const randomNumberMultiplication = jest
      .spyOn(service, 'randomNumberGenerator')
      .mockImplementation((a, b, c) => a * b * c);
    // service.randomNumberGenerator = randomNumberGenerator
    expect(randomNumberGenerator(2, 2, 2)).toBe(8);
    expect(randomNumberGenerator(-2, 2, 2)).toBe(-8);
    expect(randomNumberGenerator(2, 3, 4)).toBe(24);
    expect(randomNumberGenerator(0, 40, 15)).toBe(0);
  });

  test('utilizando a função stringToUpperCase, e realizando testes', () => {
    const mockStrToUpp = jest.spyOn(service, 'stringToUpperCase');

    expect(mockStrToUpp('xablau')).toBe('XABLAU');
    expect(service.stringToUpperCase).toHaveBeenCalledTimes(1);

    mockStrToUpp.mockImplementation((str) => str.toLowerCase());
    expect(mockStrToUpp('xablau')).toBe('xablau');

    mockStrToUpp.mockRestore();
    expect(service.stringToUpperCase('teste')).toBe('TESTE');
  });

  test('utilizando a função stringToFirstLetter, ela deve retornar a última letra de uma string', () => {
    const mockStrToLastLetter = jest.spyOn(service, 'stringToFirstLetter');
    expect(mockStrToLastLetter('xablau')).toBe('x');
    expect(mockStrToLastLetter('Trybe')).toBe('T');
    expect(mockStrToLastLetter).toHaveBeenCalledTimes(2);

    mockStrToLastLetter.mockRestore();
    mockStrToLastLetter.mockImplementation((string) =>
      string.charAt(string.length - 1)
    );
    expect(mockStrToLastLetter('xablau')).toBe('u');
    expect(mockStrToLastLetter('Trybe')).toBe('e');
    expect(mockStrToLastLetter).toHaveBeenCalledTimes(2);

    mockStrToLastLetter.mockRestore();
    mockStrToLastLetter.mockImplementation((string) =>
      string.charAt(string.length - 2)
    );
    expect(mockStrToLastLetter('xablau')).toBe('a');
    expect(mockStrToLastLetter).toHaveBeenCalledTimes(1);
  });

  test('utilizando a função concatStrings, ela deve receber três strings e concatená-las', () => {
    const mockConcatStrings = jest.spyOn(service, 'concatStrings');
    expect(mockConcatStrings).toHaveBeenCalledTimes(0);
    expect(mockConcatStrings('Daniel', 'Eduarda')).toBe('DanielEduarda');
    expect(mockConcatStrings).toHaveBeenCalled();
    expect(mockConcatStrings).toHaveBeenCalledTimes(1);

    mockConcatStrings.mockRestore();
    mockConcatStrings.mockImplementation((a, b, c) => a.concat(b, c));

    expect(mockConcatStrings('Da', 'ni', 'el')).toBe('Daniel');
    expect(mockConcatStrings('Ed', 'uar', 'da')).toBe('Eduarda');
    expect(mockConcatStrings).toHaveBeenCalledTimes(2);
  });
});

describe('testando a requisição', () => {
  const mockDog = jest.spyOn(service, 'fetchDog');
  afterEach(mockDog.mockReset);

  test('testando requisição caso a promise resolva com sucesso', async () => {
    mockDog.mockResolvedValue('request success');

    mockDog();
    expect(mockDog).toHaveBeenCalled();
    expect(mockDog).toHaveBeenCalledTimes(1);
    await expect(mockDog()).resolves.toMatch('request success');
    await expect(mockDog()).resolves.toEqual('request success');
    await expect(mockDog()).resolves.not.toBe('request failed');
    expect(mockDog).toHaveBeenCalledTimes(4);
  });

  test('testando requisição caso a promise resolva com sucesso', async () => {
    mockDog.mockResolvedValue('request failed');

    mockDog();
    expect(mockDog).toHaveBeenCalled();
    expect(mockDog).toHaveBeenCalledTimes(1);
    await expect(mockDog()).resolves.toMatch('request failed');
    await expect(mockDog()).resolves.toEqual('request failed');
    await expect(mockDog()).resolves.not.toBe('request success');
    expect(mockDog).toHaveBeenCalledTimes(4);
  });
});

//acessar
// agir
// aferir
