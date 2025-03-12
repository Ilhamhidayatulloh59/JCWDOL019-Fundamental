interface ICar {
  brand: string;
  model: string;
  price: number;
}

const car: ICar = {
  brand: "BMW",
  model: "M135I xDrive",
  price: 80000000,
};

console.log(car);

interface IPerson {
  name: string;
  age: number;
  hobby?: string;
  address?: {
    city?: string;
    country?: string;
  };
}

const person: IPerson = {
  name: "Frengky",
  age: 26,
  address: {
    city: "Bandung",
    country: "INA",
  },
};
// add property
person.hobby = "Coding";

// delete property
delete person.hobby;

console.log(person);
console.log(person.name);
console.log(person["age"]);

console["log"]("Budi");

// optional chaining
console.log(person.address?.city);
console.log(Object.keys(person));

for (let key in person) {
  console.log(person[key as keyof typeof person]);
}
