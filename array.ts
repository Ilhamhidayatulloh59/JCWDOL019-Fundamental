const arr: string[] = ["a", "b", "c", "d", "e"];
const arr2: string[] = new Array("a", "b", "c", "d", "e");

console.log(arr);
console.log(arr2);

console.log(arr[2]);

arr.push("f");
console.log(arr);

arr.unshift("z");
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.splice(2, 2, "m", "n");
console.log(arr);

const numArr: number[] = [10, 12, 20, 42, 100];

numArr.sort((y, z) => z - y);
console.log(numArr);

const newArr: number[] = numArr.filter((item) => item <= 30);
console.log(newArr);

console.log(arr.reverse());

const fruits: string[] = ["apple", "banana", "orange"];

for (let item of fruits) {
    console.log(item)
}
