class Student {
  private _matricula: string;
  private _nome: string;
  private _notaProva: number[];
  private _notaTrabalho: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notaProva = [];
    this._notaTrabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O Nome deve conter no minimo 3 caracteres');
    }
    this._nome = value;
  }

  get notaProva(): number[] {
    return this._notaProva;
  }

  set notaProva(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    }
    this._notaProva = value;
  }

  get notaTrabalho(): number[] {
    return this._notaTrabalho;
  }

  set notaTrabalho(value: number[]) {
    if (value.length > 2) {
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );
    }
    this._notaTrabalho = value;
  }

  somarProvas(): number {
    return [...this._notaProva, ...this._notaTrabalho].reduce(
      (acc, curr) => (acc += curr),
      0
    );
  }

  mediaProvas(): number {
    const somaTotal = this.somarProvas();
    const divisor = this._notaProva.length + this._notaTrabalho.length;
    return Math.round(somaTotal / divisor);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');
personOne.notaProva = [1, 2, 3, 4];
personOne.notaTrabalho = [1, 2];
console.log(personOne);
console.log('Soma de todas as notas: ', personOne.somarProvas());
console.log('Média de todas as notas: ', personOne.mediaProvas());

// const personTwo = new Student('202001012', 'João da Silva');
// console.log(personTwo);
