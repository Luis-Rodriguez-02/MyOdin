/*

In this exercise, we want you to print out a simple launch countdown to the output box, from 10 down to Blastoff. Specifically, we want you to:
 
*/

const output = document.getElementById("div");

for (; i >= 0; i--) {
  const para = document.createElement("p");
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i > 0) {
    para.textContent = `${i}`;
  } else {
    para.textContent = `Blast off!`;
  }
  output.appendChild(para);
}
