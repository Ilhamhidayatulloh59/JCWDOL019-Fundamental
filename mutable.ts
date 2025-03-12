let a: number = 20;
let b: number = a;

a = 30;

console.log(a, b);



const arr: number[] = [1, 2, 3];
const arr2: number[] = [...arr]

arr.push(4)

console.log(arr, arr2)