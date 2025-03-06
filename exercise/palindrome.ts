/*
    makan -> nakam / minum -> munim
    malam -> malam
*/

const str: string = "madam";
let reverseStr: string = "";

for (let i = 4; i >= 0; i--) {
  reverseStr += str.charAt(i);
}

console.log(str == reverseStr ? "Palindrome" : "Not Palindrome");
