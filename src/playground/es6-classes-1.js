class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name},`;
  }
  getDescription() {
    return `${this.name} is ${this.age} years(s) old.`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, homeLocation) {
    super(name);
    this.homeLocation = homeLocation;
  }
  hasLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();
    if (this.hasLocation()) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }
    return greeting;
  }
}

// const me = new Student("Jane Doe", 24, "Computer Science", "Philippines");
// console.log(me.getGreeting());

const other = new Traveler(undefined, "Nowhere");
console.log(other.getGreeting());

const traveler = new Traveler("Jane Doe", "Philippines");
console.log(traveler.getGreeting());

/*
CHALLENGES
1. Setup constructor to take name and age (default to 0)
getDescription - 'name' is age 'years' old.
--
Create new subclass of Person
1. Traveler extends person class
2. Add support for homeLocation
3. Override getGreeting
    - Hi, I am NAME. I'm visiting from LOCATION
    - Hi, I am NAME
*/
