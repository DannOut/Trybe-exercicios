export default class Subject {
  private _name: string;

  constructor(name: string) {
    this.validateName(name);
    this._name = name;
  }

  // constructor(private _name: string) {
  //   this.name = _name;
  // }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this.validateName(value);
    this._name = value;
  }

  public validateName(value: string): void {
    if (value.length < 3) {
      throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    }
  }
}
