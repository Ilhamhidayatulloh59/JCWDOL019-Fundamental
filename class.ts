const person = {
  name: "Andi",
  email: "andi@gmail.com",
  age: 26,
  greeting() {
    console.log(`Hello ${this.name}`);
  },
};

class Person {
  name: string;
  #email: string; // private
  age: number;
  static random: string = "Hello World";

  constructor(nama: string, surel: string, umur: number) {
    this.name = nama;
    this.#email = surel;
    this.age = umur;
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const person2 = new Person("Budi", "budi@gmail.com", 27);
const person3 = new Person("Caca", "caca@gmail.com", 28);

// console.log(person2.name);
// console.log(person3.name);
// console.log(person2);

// console.log(Person.random)
// console.log(Date.now())

// encapsulation
class Employee {
  private employeeName: string;
  constructor() {
    this.employeeName = "";
  }

  getEmployeeName() {
    return this.employeeName;
  }

  setEmployeeName(name: string) {
    this.employeeName = name;
  }
}

const employee = new Employee();
employee.setEmployeeName("Andi");
console.log(employee.getEmployeeName());
