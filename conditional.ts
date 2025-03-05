let age: number = 15;

if (age >= 17) {
  console.log("You can now create an ID Card");
} else {
  console.log("You are not old enough to create an ID Card");
}

let grade: string = "B";

if (grade == "A") {
  console.log("Excellent Result !");
} else if (grade == "B") {
  console.log("Great Result !");
} else if (grade == "C") {
  console.log("Average Result !");
} else {
  console.log("Invalid grade !");
}

const now = new Date();
const day = now.getDay() // 0,1,2,3,4,5,6

switch (day) {
  case 0:
    console.log("Minggu");
    break;
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jum'at");
    break;
  case 6:
    console.log("Sabtu");
    break;
}

// ternary operator
console.log(
  age >= 17
    ? "You can now create an ID Card"
    : "You are not old enough to create an ID Card"
);

// short circuiting
const name: string = "Andi";
const displayName: string = name || "Budi";

console.log(displayName);

const num: number = 1;
const displayNum: number = num && 10;

console.log(displayNum);

