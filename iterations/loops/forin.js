// FOR IN is for properties of an object.

const person = {
    name:"John",
    lname:"Emerson",
    age:12,
}

for (let key in person) {
    console.log(person[key])
}