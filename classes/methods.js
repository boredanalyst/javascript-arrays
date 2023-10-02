class Car {
    constructor(name,wheels) {
        this.name = name;
        this.wheels = wheels;
    };

    moveForward() {
        console.log(`${this.name} is moving forward.`);
    }
}

const honda = new Car("Honda",4);
honda.moveForward();