import Animal from "./task1_Animal.js";

class Cat extends Animal {
  constructor(name, color, type, breed, age, gender) {
    super(name, color, type);
    this.breed = breed;
    this.age = age;
    this.gender = gender;
  }

  meow() {
    console.log(`${this.name} says meow.`);
  }

  sit() {
    console.log(`${this.name} is sitting.`);
  }
}

//об'єкти до класу Cat
const myCat = new Cat("Moon", "black", "cat", "Egyptian Mau", 2, "female");
const neighbourCat = new Cat("Snow", "white", "cat", "Egyptian Mau", 6, "female");

myCat.sayHello();
myCat.run();
myCat.meow();
myCat.sit();
neighbourCat.sayHello();
neighbourCat.meow();