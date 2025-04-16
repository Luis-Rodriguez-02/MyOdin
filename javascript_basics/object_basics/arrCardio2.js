`use strict`;

// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const containsAbove19 = people.some((person) => {
  return 2025 - person.year >= 19;
});

console.log(containsAbove19);
// Array.prototype.every() // is everyone 19 or older?

const everyAbove19 = people.every((person) => {
  return 2025 - person.year >= 19;
});

console.log(everyAbove19);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const text = comments.find((comment) => {
  return comment.id == 823423;
});
console.log(text);

// Array.prototype.findIndex()
// Find the comment with this ID
const indexFound = comments.findIndex((comment) => {
  return comment.id == 823423;
});

console.log(indexFound);
console.log(comments.splice(indexFound, 1));
console.log(comments);
// delete the comment with the ID of 823423
