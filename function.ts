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

// closure function
function greeting(name: string) {
  const defaulMessage = "Hello, ";

  return function () {
    return defaulMessage + name;
  };
}

const greetingDavid = greeting("David");
console.log(greetingDavid());

// currying
function multiplier(factor: number) {
  return function (num: number) {
    return factor * num;
  };
}

const mul4 = multiplier(4);
const mul5 = multiplier(5);

console.log(mul4(3));
console.log(mul4(5));
console.log(mul5(2));

// reccursive function
function countDown(fromNumber: number) {
  console.log(fromNumber); // 1

  let nextNumber = fromNumber - 1; // 0

  if (nextNumber > 0) {
    countDown(nextNumber);
  }
}

countDown(5);

// arrow function
const sum = (a: number, b: number) => a + b;
console.log(sum(10, 2));

const count: number = 1 / 0; // Infinity
console.log(isFinite(count));

const count2: number = Number("10a"); // Na
console.log(isNaN(count2));
