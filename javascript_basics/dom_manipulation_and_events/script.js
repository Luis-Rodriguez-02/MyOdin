const container = document.querySelector("#container");

// creating a div
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text content!";

// a <p> with red text that says “Hey I’m red!”
const paraRed = document.createElement("p");
paraRed.textContent = "Hey I'm red!!";
paraRed.style = "color: red";
content.appendChild(paraRed);
// an <h3> with blue text that says “I’m a blue h3!”
const paraBlue = document.createElement("p");
paraBlue.textContent = "I'm a blue h3!";
paraBlue.style = ["color: blue"];
content.appendChild(paraBlue);

// a <div> with a black border and pink background color with the following elements inside of it:
const blackDiv = document.createElement("div");
blackDiv.setAttribute(
  "style",
  "background-color: pink; border: 2px solid black"
);

// another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
blackDiv.appendChild(h1);
// a <p> that says “ME TOO!”
const paraInDiv = document.createElement("p");
paraInDiv.textContent = "ME TOO!";
blackDiv.appendChild(paraInDiv);
// Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

container.appendChild(content);
container.appendChild(blackDiv);

const button = document.querySelector("#java-script");
button.onclick = () => alert("Hello World");

const bestBtn = document.querySelector("#bestBtn");
bestBtn.addEventListener("click", () => alert("Hello World"));

bestBtn.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "Blue";
});

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  });
});
