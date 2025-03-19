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

for (const person of people) {
  if (person === "Phil" || person === "Lola") {
    refused.textContent += `${Person}, `;
  } else {
    admitted.textContent += `${Person}, `;
  }
}

let exists = 1;
while (exists != -1) {}

for (let i = 0; i < )

const refusedText = refused.textConten;t
const admittedText = admitted.textContent;
refused.textContent = refused.textContent.slice(0, refusedText.length - 2 + '.');
refused.textContent = admitted.textContent.slice(0, admittedText.length - 2 + '.')
