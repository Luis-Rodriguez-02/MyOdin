`use strict`;

// Collection of javascript.info object exercises

let user = {
  name: "John",
  Surname: "Smith",
};
user["name"] = "Pete";
console.log(user["name"]);

console.log(user.name === undefined);
delete user.name;
console.log(user.name === undefined);

for (prop in user) {
  console.log(prop);
}

let schedule = {};

function isEmpty(obj) {
  for (let key in obj) {
    // if a key exists it will run
    return false;
  }

  // if no keys exist return true, obj has no properties
  return true;
}

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false

console.log("------------------");

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let person in salaries) {
  sum += salaries[person];
}

console.log(sum);

console.log("------------------");

function multiplyNumeric(obj) {
  for (let prop in obj) {
    if (typeof obj[prop] === "number") {
      obj[prop] *= 3;
    }
  }
}
