// SPREAD
const arr = [1, 2, 3];

const arr2 = [...arr, 4];

const person = {
  name: 'Zeeshan',
  age: 23
};

const newPerson = {
  ...person,
  email: 'zee@gmail.com'
};

// console.log(newPerson);

// DESTRUCTURING
const profile = {
  name: 'Zeeshan Tamboli',
  address: {
    street: '67 Main St',
    city: 'Bangalore'
  },
  hobbies: ['reading', 'movies', 'jogging']
};

const { name, address, hobbies } = profile;

// console.log(name, address, hobbies[0]);

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person('John', 33);
const person2 = new Person('Jack', 28);

// console.log(person2.greet());

// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ₹${this.balance}`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);

console.log(customer1.info());
