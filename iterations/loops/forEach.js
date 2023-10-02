// FOR EACH is a function that applies a function to each item of the array.

const colors = ["red","orange","yellow"];

colors.forEach(upperMe);

function upperMe(value) {
    console.log(value.toUpperCase());
}