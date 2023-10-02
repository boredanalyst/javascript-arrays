const age = 12;

try {
    console.log(`User is ${age} years old.`);
    if (age < 18) throw "too young";
    if (age > 30) throw "too old";
} catch(err) {
    console.log(`Input is ${err}`);
}