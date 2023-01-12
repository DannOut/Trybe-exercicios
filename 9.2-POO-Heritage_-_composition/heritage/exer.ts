interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements MyInterface {
  constructor(public myNumber: number) {}

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const obj = new MyClass(4);
console.log(obj.myNumber);
console.log(obj.myFunc(3));

// class SuperClass {
//   public isSuper: boolean;

//   constructor() {
//     this.isSuper = true;
//   }

//   sayHello(): void {
//     console.log('Hello World!');
//   }
// }

// class SubClass extends SuperClass {
//   constructor() {
//     super();
//     this.isSuper = false;
//   }
// }

// function myFunc(objSuperClass: SuperClass) {
//   objSuperClass.sayHello();
//   if (objSuperClass.isSuper) return console.log('SUPER!');
//   return console.log('SUB!');
// }

// const spr1 = new SuperClass();
// const sub1 = new SubClass();

// myFunc(spr1);
// myFunc(sub1);
