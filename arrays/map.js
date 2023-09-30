// You can perform an operation on each item using map to return an array.

const ages = [12,45,23,56];

// This function will be applied by .map() to each element in the data.
function double(number) {
    return number * 2;
}

const doubled = ages.map(double); // This will apply the double function on each item of the array.

console.log(doubled);

// .map() can also function for strings.

const colors = ["red","orange","yellow"];

function upperMe(color) {
    return color.toUpperCase();
}

const upperColors = colors.map(upperMe);

console.log(upperColors);