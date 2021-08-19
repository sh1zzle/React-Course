//reassigning let
let nameLet = "Jane";
nameLet = "Julie";
console.log(nameLet);

// Block scoping
const fullName = "Jane Doe";

let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}

console.log(firstName);
