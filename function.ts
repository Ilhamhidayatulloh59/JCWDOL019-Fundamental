function square(num: number) {
  return num * num;
}

const square2 = function (num: number) {
  return num * num;
};

const x = square(10);
console.log(x);

console.log(square(20));
console.log(square2(20));

// default parameter
function multiple(a: number, b: number = 1) {
  return a * b;
}

console.log(multiple(10));

// rest parameter
function myFunc(a: number, b: number, ...many: number[]) {
  console.log(many);
  return a + b;
}

console.log(myFunc(1, 2, 3, 4, 5, 6, 7));

// nested function
function getMessage(name: string) {
  function sayHello() {
    return "Hello " + name;
  }

  function welcome() {
    return ", welcome to purwadhika";
  }

  return sayHello() + welcome();
}

console.log(getMessage("Andi"));
