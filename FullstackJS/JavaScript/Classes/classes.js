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

// class Pizza {
//   constructor(pizzaSize, pizzaType) {
//     this.size = pizzaSize;
//     this.crust = "original";
//     this.pizzaType = pizzaType;
//     this.toppings = [];
//   }

//   getCrust() {
//     return this.crust;
//   }

//   setCrust(pizzaCrust) {
//     this.crust = pizzaCrust;
//   }

//   getToppings() {
//     return this.toppings;
//   }

//   setToppings(...toppings) {
//     toppings.forEach((topping) => this.toppings.push(topping));
//   }

//   bake() {
//     console.log(
//       `Baking a ${this.size} ${this.pizzaType} ${this.crust} crust pizza.`
//     );
//   }
// }

// const myPizza = new Pizza("Small", "Pepperoni");
// myPizza.setToppings("Pepperoni", "Ham", "Salami");
// console.log(myPizza.getToppings());

// Factory Function

// function pizzaFactory(pizzaSize) {
//   const crust = "original";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a ${size} ${crust} pizza.`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

class Pizza {
  crust = "orignal";
  #sauce = "traditional";
  #size;
  constructor(pizzaSize) {
    this.size = pizzaSize;
    // _ = intended to be private
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }

  hereYouGo() {
    console.log(`Here's your ${this.crust} ${this.#sauce} ${this.size} pizza.`);
  }
}

// const myPizza = new Pizza("large");
// myPizza.hereYouGo();
// console.log(myPizza.crust);

// class SpecialtyPizza extends Pizza {
//   constructor(pizzaSize) {
//     super(pizzaSize);
//     this.type = "Meat Lovers";
//   }

//   slice() {
//     console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
//   }
// }

// const meatLoversPizza = new SpecialtyPizza("medium");
// meatLoversPizza.slice();

class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }

  displayDetails() {
    console.log({ name: this.name, age: this.age, country: this.country });
  }
}

const Joe = new Person("Joe", 21, "United States");
Joe.displayDetails();

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calculatePerimeter() {
    console.log(
      `Perimeter of rectangle with a width of ${this.width} and a height of ${
        this.height
      } is ${2 * (this.width + this.height)}`
    );
  }
}

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayDetails() {
    return { year: this.make, model: this.model, year: this.year };
  }
}

class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year);
    this.doors = doors;
  }

  displayDetails() {
    return {
      year: this.make,
      model: this.model,
      year: this.year,
      doors: this.doors,
    };
  }
}
