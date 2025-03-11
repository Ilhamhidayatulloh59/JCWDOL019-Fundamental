function removeOdd(arr: number[]) {
  return arr.filter((item) => item % 2 == 0);
}

console.log(removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
