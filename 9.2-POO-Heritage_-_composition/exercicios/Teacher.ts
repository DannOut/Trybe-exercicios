import Employee from './Employee';
import Person from './Person';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);
    this.validateSalary(salary);
    this.validateDate(birthDate);

    this._registration = this.generateRegistration();
    this._salary = salary;
    this._admissionDate = new Date();
    this._subject = subject;
  }

  //* REGISTRATION
  public get registration(): string {
    return this._registration;
  }
  public set registration(value: string) {
    this._registration = value;
  }

  //* SALARY
  public get salary(): number {
    return this._salary;
  }
  public set salary(value: number) {
    this.validateSalary(value);
    this._salary = value;
  }

  //* ADMISSIONDATE
  public get admissionDate(): Date {
    return this._admissionDate;
  }
  public set admissionDate(value: Date) {
    this.validateDate(value);
    this._admissionDate = value;
  }

  //* SUBJECT
  public get subject(): Subject {
    return this._subject;
  }
  public set subject(value: Subject) {
    this._subject = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ''
    );
    return `PRF${randomStr}`;
  }

  validateSalary(salary: number): void {
    if (salary < 0) throw new Error('O salário não pode ser negativo!');
  }
  validateDate(value: Date): void {
    if (value.getTime() > new Date().getTime())
      throw new Error('A data de admissão não pode ser uma data no futuro.');
  }
}
