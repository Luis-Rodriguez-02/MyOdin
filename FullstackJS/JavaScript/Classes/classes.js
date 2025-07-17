// "use strict";

// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },
// };

// // now in class syntax

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   sayHi() {
//     console.log(`Hello ${this.firstName} ${this.lastName}!`);
//   }
// }

// const john = new Person("John", "Doe");
// john.sayHi();

// class Users {
//   ["say" + "Hi"]() {
//     console.log("Hello");
//   }
// }

// new Users().sayHi();

// Javascript Classes Explained Video Notes

class Pizza {
  constructor(pizzaSize, pizzaType) {
    this.size = pizzaSize;
    this.crust = "original";
    this.pizzaType = pizzaType;
    this.toppings = [];
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(...toppings) {
    toppings.forEach((topping) => this.toppings.push(topping));
  }

  bake() {
    console.log(
      `Baking a ${this.size} ${this.pizzaType} ${this.crust} crust pizza.`
    );
  }
}

const myPizza = new Pizza("Small", "Pepperoni");
myPizza.setToppings("Pepperoni", "Ham", "Salami");
console.log(myPizza.getToppings());
