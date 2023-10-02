class Person {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    ageUp(){
        this.age += 1;
        console.log(`${this.name} is now ${this.age} years old!`);
    }
}

class Student extends Person {
    constructor(name,age,studies,grade){
        super(name,age);
        this.studies = studies;
        this.grade = 0;
    }

    study() {
        this.grade += 1;
        console.log(`${this.name} studied.`);
        console.log(`${this.name}'s grade is now ${this.grade}`);
    }
}

const anna = new Student("Anna",22,"Psychology");
anna.ageUp();
anna.study();