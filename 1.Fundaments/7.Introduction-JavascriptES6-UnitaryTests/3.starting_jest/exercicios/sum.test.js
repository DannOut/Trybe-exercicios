const sum = require('./sum.js');

describe('Training Sum test', () => {
  it('A função recebe a soma dos parâmetros A + B', () => {
    expect(sum(2, 5)).toequal(7);
  });
});
