const person = {
  name: "Steve",
  age: 58,
  gender: "male",
  referredAs: ["He", "His"],
  introduction: function () {
    return `${this.referredAs[1]} name is ${this.name}.`;
  },
  ageInformation: function () {
    return `${this.referredAs[0]} is ${this.age} years old.`;
  },
};

const car = {
  brand: "BMW",
  model: "iX3",
  year: 2018,
  startFunction: function () {
    return `${this.brand} ${this.model} is starting up.`;
  },
  breakFunction: function () {
    return `${this.brand} ${this.model} is stopping.`;
  },
};

const book = {
  title: "The Shining",
  author: "Stephen King",
  writingType: "work of fiction",
  genre: "Horror",
  pages: 675,
  summary: function () {
    return `"${this.title}" is a ${this.writingType} written by ${this.author}. It is a ${this.genre} book.`;
  },
  PagesAmountInfo: function () {
    return `This book has ${this.pages} pages.`;
  },
};

console.log(person.introduction());
console.log(person.ageInformation());
console.log("---------------------------");
console.log(car.startFunction());
console.log(car.breakFunction());
console.log("---------------------------");
console.log(book.summary());
console.log(book.PagesAmountInfo());
