// /*

// In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:

// */

// const output = document.getElementById("div");

// for (; i >= 0; i--) {
//   const para = document.createElement("p");
//   if (i === 10) {
//     para.textContent = `Countdown ${i}`;
//   } else if (i > 0) {
//     para.textContent = `${i}`;
//   } else {
//     para.textContent = `Blast off!`;
//   }
//   output.appendChild(para);
// }

// for (const person of people) {
//   if (person === "Phil" || person === "Lola") {
//     refused.textContent += `${Person}, `;
//   } else {
//     admitted.textContent += `${Person}, `;
//   }
// }

// let exists = 1;
// while (exists != -1) {}

// for (let i = 0; i < )

// const refusedText = refused.textConten;t
// const admittedText = admitted.textContent;
// refused.textContent = refused.textContent.slice(0, refusedText.length - 2 + '.');
// refused.textContent = admitted.textContent.slice(0, admittedText.length - 2 + '.')

// let i = 0;
// while( ++i < 5)
// 1 < 5 // alerts 1
// 2 < 5 // alerts 2
// 3 < 5 // alerts 3
// 4 < 5 // alerts 4

// let j = 0
// while ( j++ < 5)
// 1 < 5 // alert 1
// 2 < 5 // alert 2
// 3 < 5 // alert 3
// 4 < 5 // alert 4

// do {
//   let userInput = prompt("Enter a number greater than 100");
// } while (userInput <= 100 && userInput)

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
const howManyPrimes = (num) => {
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
};

howManyPrimes(10);
