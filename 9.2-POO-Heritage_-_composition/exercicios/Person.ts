export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birth: Date) {
    this._name = name;
    this._birthDate = birth;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(value: Date) {
    this.validateBirthDate(value);
    this._birthDate = value;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  static getAge(value: Date): number {
    const diffDate = Math.abs(new Date().getTime() - value.getTime());
    const yearMs = 31_536_000_000; // 1 ano = 31536000000 milissegundos  }
    return Math.floor(diffDate / yearMs);
  }

  private validateName(value: string): void {
    if (value.length < 3)
      throw new Error('O Nome deve ter no mínimo 3 caracteres.');
  }

  private validateBirthDate(value: Date): void {
    if (value.getTime() > new Date().getTime())
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    if (Person.getAge(value) > 120)
      throw new Error('A pessoa deve ter no máximo 120 anos.');
  }
}
