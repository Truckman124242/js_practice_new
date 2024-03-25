export default class Animal {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  sayHello() {
    return console.log(`${this.name} goes "Woof"`);
  }
  run() {
    return `${this.name} runs`;
  }
}

const myAnimal = new Animal("Robert", "brown", "dog");

myAnimal.sayHello();
myAnimal.run();
