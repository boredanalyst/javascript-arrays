// ARROW FUNCTIONS are anonymous, quick and single-use.

let hello = ""

hello = () => "Hello world";

console.log(hello());

hello = () => (1.7*3);

console.log(hello());

hello = (multiplier) => (5 * multiplier);

console.log(hello(2));