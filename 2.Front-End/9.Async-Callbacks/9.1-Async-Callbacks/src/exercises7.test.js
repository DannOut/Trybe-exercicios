const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('uppercase "test" to equal "TEST"', (done) => {
  uppercase('test', (naruto) => {
    try {
      expect(naruto).toBe('TEST');
      done();
    } catch (error) {
      done(error);
    }
  });
  uppercase('value', (str) => {
    try{
      expect(str).toBe('VALUE');
      done();
    } catch (error) {
      done(error);
    }
  })
});

