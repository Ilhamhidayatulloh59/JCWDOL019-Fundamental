const letter: string = "hello world";
let result: string = "";

for (let i = 0; i < letter.length; i++) {
  if (i == 0 || letter.charAt(i - 1) == " ") {
    result += letter.charAt(i).toUpperCase();
  } else {
    result += letter.charAt(i);
  }
}

console.log(result)
