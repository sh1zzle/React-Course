// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(5, 4, 10));

// this keyword - no longer bound

const user = {
  name: "Jane",
  cities: ["Philadelphia", "New York", "Dublin"],
  printPlacesLived() {
    return this.cities.map((city) => this.name + " has lived in " + city);
  },
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  // numbers - array of number
  numbers: [3, 2, 8],

  // multiplyBy - single number
  multiplyBy: 2,
  // multiply - return a new array where the number have been multiplied
  multiply() {
    return this.numbers.map((x) => x * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
