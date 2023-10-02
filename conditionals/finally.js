// FINALLY is run after all the tries and catches whatever the result.

const age = "ten";

try {
    console.log("Assessing your age.");
    if (typeof(age) !== "number") {
        throw "Code 103: Age is not a number.";
    } else {
        console.log("Input received!");
    }
} catch(err) {
    console.log(`Error encountered\n ${err}`)
} finally {
    for (let ctr = 1; ctr < 4; ctr++) {
        console.log(`Program is closing in ${ctr}`);
    }
}