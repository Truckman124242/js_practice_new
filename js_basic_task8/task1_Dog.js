import Animal from "./task1_Animal.js";

class Dog extends Animal {
  constructor(name, color, type, breed, age, gender) {
    super(name, color, type);
    this.breed = breed;
    this.age = age;
    this.gender = gender;
  }

  bark() {
    console.log(`${this.name} barks.`);
  }

  roll() {
    console.log(`${this.name} is rolling.`);
  }
} //об'єкти до класу Dog
const myDog = new Dog("Jacob", "grey", "dog", "Huskie", 6, "male");
const neighbourDog = new Dog("Dewey", "red", "dog", "dachshund", 3, "male");

myDog.sayHello();
myDog.run();
myDog.bark();
myDog.roll();
neighbourDog.sayHello();
neighbourDog.bark();