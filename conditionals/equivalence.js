// There are two types of equivalence.

const age = 12;

// This is value equivalence.

if (age == "12") {
    console.log("These values are equal")
} 

// This is strict equivalence.

if (age === "12") {
    console.log("These values are equal.")
} else {
    console.log("These values are not equal.")
}