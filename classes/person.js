class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    } 

    ageUp() {
        this.age += 1;
        console.log(`${this.name} is now ${this.age} years old!`);
    }
}

const anna = new Person("Anna",1);
anna.ageUp();