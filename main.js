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

console.log(newPerson);

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

console.log(name, address, hobbies[0]);
