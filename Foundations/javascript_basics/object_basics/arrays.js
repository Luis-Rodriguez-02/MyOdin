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

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((person) => {
//   return person.name;
// });

// console.log(names);
// console.log(`----------`);
// console.log(namesV2);

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [john, pete, mary];

// const usersMapped = users.map((item) => {
//   return {
//     fullName: `${item.name} ${item.surname}`,
//     id: item.id,
//   };
// });

// console.log(usersMapped);
// console.log(usersMapped[0].fullName);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [pete, john, mary];
// const sortByAge = (arr) => arr.sort((a, b) => a.age - b.age);
// sortByAge(arr);
// console.log(arr);
// console.log(arr[0].name);
// console.log(arr[1].name);
// console.log(arr[2].name);

// let arr = [1, 2, 3];

// const shuffle = (arr) => {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//   }
// };

// console.log(arr);
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);
// shuffle(arr);
// console.log(arr);

// function getAverageAge(users) {
//   const totalAge = users.reduce((sumAges, user) => {
//     return sumAges + user.age;
//   }, 0);

//   return totalAge / users.length;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [john, pete, mary];

// console.log(getAverageAge(arr));

// function unique(arr) {
//   let uniqueValues = [];

//   for (let item of arr) {
//     if (!uniqueValues.includes(item)) {
//       uniqueValues.push(item);
//     }
//   }
//   return uniqueValues;
// }

// let strings = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(strings));

function groupById(users) {
  return users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
  }, {});
}

let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

console.log(users);
const nObj = groupById(users);
console.log(nObj);
