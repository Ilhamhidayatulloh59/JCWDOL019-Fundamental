const fruits: string[] = ["apple", "banana", "jackfruit", "apple"];
const newFruits = new Set(fruits);

console.log(newFruits);
console.log(newFruits.has("banana"));
