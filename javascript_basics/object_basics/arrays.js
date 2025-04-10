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
