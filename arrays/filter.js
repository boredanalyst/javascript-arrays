// .filter() applies a condition to each item in the array and returns an array only those meeting the requirement.

const colors = ["red","orange","yellow"];

function includesA(color) {
    return color.includes("a") == true; // This function will check if the word contains the character 'a';
}

const aColors = colors.filter(includesA); // This will apply the filter to each item in the array and return only those that meet the criteria.

console.log(aColors); // This will print the new array.