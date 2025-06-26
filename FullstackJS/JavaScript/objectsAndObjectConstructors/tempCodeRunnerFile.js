"use strict";

// Object Constructors
// - Convention uppercase letter

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(`Hi, my name is ${this.name}`);
  };
}

const player = new Player("steve", "X");

console.log(player["name"]);
player.sayName();
