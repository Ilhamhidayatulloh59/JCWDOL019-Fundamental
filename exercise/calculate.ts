class Student {
  name: string;
  email: string;
  age: number;
  score: number;

  constructor(nama: string, surel: string, umur: number, nilai: number) {
    this.name = nama;
    this.email = surel;
    this.age = umur;
    this.score = nilai;
  }
}

const student1 = new Student("Andi", "andi@gmail.com", 20, 80);
const student2 = new Student("Budi", "budi@gmail.com", 25, 85);
const student3 = new Student("Caca", "caca@gmail.com", 30, 90);

const arrStudent: Student[] = [student1, student2, student3];

function calculate(arr: Student[]) {
  const score = arr.map((item) => item.score); // [80, 85, 90]
  const age = arr.map((item) => item.age); // [20, 25, 30]

  return {
    score: {
      highest: Math.max(...score),
      lowest: Math.min(...score),
      average: score.reduce((a, b) => a + b) / score.length,
    },
    age: {
      highest: Math.max(...age),
      lowest: Math.min(...age),
      average: age.reduce((a, b) => a + b) / age.length,
    },
  };
}

console.log(calculate(arrStudent));
