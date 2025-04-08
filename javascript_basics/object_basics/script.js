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

const person = {
  name: ["Bob", "Smith"],
};

console.log(console.log(person));

person.name.first = person.name[0];
person.name.last = person.name[1];

console.log(person);

person.age = 45;
person["name"]["last"] = "Cratchit";

console.log(person);

console.log("-----------");

const sumOfTripledEvens = (arr) => {
  let sum = 0;
  for (let number in arr) {
    if (number % 2 === 0) {
      sum += number * 3;
    }
  }
  return sum;
};

const testArr = [1, 2, 3, 4, 5];
console.log(sumOfTripledEvens(testArr));

const betterSumOfTripledEvens = (arr) => {
  return arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 3)
    .reduce((sum, currentNumber) => (sum += currentNumber));
};
