// "use strict";

// // Object Constructors
// // - Convention uppercase letter

// function Player(name, marker) {
//   this.name = name;
//   this.marker = marker;
//   this.sayName = function () {
//     console.log(`Hi, my name is ${this.name}`);
//   };
// }

// const player = new Player("steve", "X");

// console.log(player["name"]);
// player.sayName();

// // Note that, as constructors are just regular functions, they could be called without using new by mistake, which would cause hard-to-track errors. To prevent that, you can use the new.target meta-property like this:

// // Write a constructor for making “Book” objects. We will revisit this in the next project. Your book objects should have the book’s title, author, the number of pages, and whether or not you have read the book.

// function Books(title, author, pages, haveRead) {
//   if (!new.target) {
//     throw Error("You must use the 'new' operator to call the constructor");
//   }
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.haveRead = haveRead;
//   this.info = function () {
//     const information = `${this.title} by ${this.author}, ${
//       this.pages
//     } pages, ${this.haveRead ? "read " : "not read"}`;

//     return information;
//   };
// }

// const harryPotter = new Books("The Hobbit", "J.K Rowling", 256, false);
// console.log(harryPotter.info());

// // All JS objects have a prototype
// // Prototype is another object that the JS Objects inherit from
// // SO the JS object has access to prototype's methods

// console.log(Object.getPrototypeOf(player) == Player.prototype);
// console.log(
//   Object.getPrototypeOf(player) === Object.getPrototypeOf(harryPotter)
// );

// Working with Prototypes

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

// alert(rabbit.jumps); // true

// delete rabbit.jumps;

// alert(rabbit.jumps); // null

// delete animal.jumps;

// alert(rabbit.jumps); // undefined

// Searching algorithm

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

Object.setPrototypeOf(pockets, bed);
Object.setPrototypeOf(bed, table);
Object.setPrototypeOf(table, head);
console.log(Object.getPrototypeOf(pockets));
console.log(Object.getPrototypeOf(bed));
console.log(Object.getPrototypeOf(table));
console.log(Object.getPrototypeOf(head));

// head.glasses is faster
console.log(pockets.glasses);
