const arr = ["Andi", "Budi", "Caca"];
const [a, b, c] = arr;

arr[0] = "Roni";

console.log(a);
console.log(b);
console.log(c);

const person = { name: "andi", email: "andi@gmail.com", age: 26 };
const { name, age, email } = person;

console.log(name);
console.log(email);
console.log(age);

