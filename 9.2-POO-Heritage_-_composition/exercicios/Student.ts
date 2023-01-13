import Person from './Person';

export default class Student extends Person {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _assignmentGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this.name = name;
    this.birthDate = birthDate;
    this.enrollment = this.generateEnrollment();
  }

  public get examsGrades(): number[] {
    return this._examsGrades;
  }
  public set examsGrades(value: number[]) {
    if (value.length > 4)
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
    this._examsGrades = value;
  }

  public get enrollment(): string {
    return this._enrollment;
  }
  public set enrollment(value: string) {
    this._enrollment = value;
  }

  public get assignmentGrades(): number[] {
    return this._assignmentGrades;
  }
  public set assignmentGrades(value: number[]) {
    if (value.length > 2)
      throw new Error(
        'A pessoa estudante só pode possuir 2 notas de trabalhos.'
      );
    this._assignmentGrades = value;
  }

  generateEnrollment(): string {
    const random = String(Math.round(Math.random() + 100 * Math.random() + 10));
    return `STU${random}`;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.assignmentGrades].reduce(
      (previousNote, note) => {
        const nextNote = note + previousNote;
        return nextNote;
      },
      0
    );
  }

  sumAverageGrade(): number {
    const sumGrades = this.sumGrades();
    const divider = this.examsGrades.length + this.assignmentGrades.length;
    return Math.round(sumGrades / divider);
  }
}
