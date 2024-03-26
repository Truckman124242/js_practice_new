export default class Animal {
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  sayHello() {
    return console.log(
      `This is ${this.name}, it's a ${this.color} colored ${this.type}.`
    );
  }
  run() {
    return `${this.name} runs`;
  }
}
