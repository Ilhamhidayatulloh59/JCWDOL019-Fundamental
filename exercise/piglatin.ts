/* 
    input: "Pig latin is cool"
    output: "igPay atinlay siay oolcay"
*/

function pigLatin(word: string) {
  return word.split(" ").map((item) => item.slice(1) + item.charAt(0) + "ay").join(" ")
}

console.log(pigLatin("Pig latin is cool"));
