class Person {
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(value){
        this._name = value.toUpperCase();
    }
}

const anna = new Person("Anna");
console.log(anna.name);

anna.name = "anna";
console.log(anna.name);