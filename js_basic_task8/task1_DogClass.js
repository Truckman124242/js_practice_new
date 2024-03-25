import Animal from "./task1_AnimalClass" 

class Dog extends Animal {
    constructor(color, name, type, breed, age, gender) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
        this.gender = gender;
    }

    bark() {
        console.log(`${this.name} is barking.`);
    }

    fetch() {
        console.log(`${this.name} is fetching the ball.`);
    }
}

// Приклад використання класу Dog
const myDog = new Dog("brown", "Buddy", "dog", "Golden Retriever", 3, "male");

// Виклик методів для виведення інформації та дій собаки
myDog.sayHello();
myDog.run();
myDog.bark();
myDog.fetch();