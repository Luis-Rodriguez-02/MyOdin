`use strict`;

// Camelize Exercises

function camelize(str) {
  let separatedStr = str.split("-");
  console.log(separatedStr);
  let finalStr = "";
  let firstWordEncountered = false;
  separatedStr.forEach((word, index) => {
    word = word.trim();
    if (word !== "" && !firstWordEncountered) {
      finalStr = finalStr.concat(word);
      firstWordEncountered = true;
    } else {
      if (word !== "") {
        word = word[0].toUpperCase() + word.slice(1);
        finalStr = finalStr + word;
      }
    }
  });
  return finalStr;
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition-"));
console.log(camelize("-border-left-width"));

// Filter range exercise

function filterRange(arr, a, b) {
  // Given arr, look for elements higher or equal to a and lower or equal to b

  // return a new arr don't modify original

  // loop through all elements of arr
  // test with comparison func
  // if pass test add to newArr
  // return newArr
  function withinRange(num) {
    return num >= a && num <= b;
  }

  let newArr = arr.filter(withinRange);

  return newArr;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(arr);
console.log(filtered);
