interface Logger {
  log(param: string): void;
}

interface Database {
  logger: Logger;
  save(key: string, value: string): void;
}

class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log('Log 1, ' + param);
  }
}

class ConsoleLogger2 {
  log(param: string): void {
    console.log('Log 2, ' + param);
  }
}

class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger()) {}

  save(key: string, value: string): void {
    this.logger.log(`Salvando o valor ${value} na chave ${key}`);
  }
}

// Crie um objeto de cada um dos _Loggers_.
const logger1 = new ConsoleLogger();
const logger2 = new ConsoleLogger2();

// Crie três objetos da _ExampleDatabase_, cada um dos dois primeiros recebendo um dos _Loggers_, e o último não recebendo nenhum.
const database1 = new ExampleDatabase(logger1);
const database2 = new ExampleDatabase(logger2);
const database3 = new ExampleDatabase();

// Utilize todos eles para salvar um conteúdo fictício.
database1.save('anime 1', 'naruto 1');
database2.save('anime 2', 'naruto 2');
database3.save('anime 3', 'naruto 3');
