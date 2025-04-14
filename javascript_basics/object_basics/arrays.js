`use strict`;

// // Camelize Exercises

// function camelize(str) {
//   let separatedStr = str.split("-");
//   console.log(separatedStr);
//   let finalStr = "";
//   let firstWordEncountered = false;
//   separatedStr.forEach((word, index) => {
//     word = word.trim();
//     if (word !== "" && !firstWordEncountered) {
//       finalStr = finalStr.concat(word);
//       firstWordEncountered = true;
//     } else {
//       if (word !== "") {
//         word = word[0].toUpperCase() + word.slice(1);
//         finalStr = finalStr + word;
//       }
//     }
//   });
//   return finalStr;
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition-"));
// console.log(camelize("-border-left-width"));

// // Filter range exercise

// function filterRange(arr, a, b) {
//   // Given arr, look for elements higher or equal to a and lower or equal to b

//   // return a new arr don't modify original

//   // loop through all elements of arr
//   // test with comparison func
//   // if pass test add to newArr
//   // return newArr
//   function withinRange(num) {
//     return num >= a && num <= b;
//   }
//   return arr.filter(withinRange);
// }

// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log(arr);
// console.log(filtered);

// // Filter range 'in place'

// function filterRangeInPlace(arr, a, b) {
//   // We want to filter an array of numbers to only include numbers that are within the range [a,b], changing the array and not returning a new arr
//   for (let i = arr.length; i >= 0; i--) {
//     if (!(arr[i] >= a && arr[i] <= b)) {
//       arr.splice(i, 1);
//       console.log(arr[i]);
//     }
//   }
// }

// let arr2 = [5, 3, 8, 1];
// console.log(arr2);
// filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
// console.log(arr2);

// // Sort in decreasing order

// function sortDecreasing(arr) {
//   // Given an array sort in decresing order,
//   // Use sort function and reverse b - a
//   // If the second number is bigger it will be positive and go first, if not a will be first since it is bigger
//   arr.sort((a, b) => {
//     console.log(`A:${a} | B:${b}`);
//     return b - a;
//   });
// }

// let arr3 = [5, 2, 1, -10, 8];
// console.log(arr3);
// sortDecreasing(arr3);
// console.log(arr3);

// const copySorted = (arr) => {
//   return arr.slice().sort();
// };

// let arr4 = ["HTML", "JavaScript", "CSS"];
// console.log(arr4);
// const sorted4 = copySorted(arr4);
// console.log(sorted4);
// console.log(arr4);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map((person) => {
  return person.name;
});

console.log(names);
console.log(`----------`);
console.log(namesV2);
