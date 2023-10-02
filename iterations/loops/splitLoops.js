// You can loop over the result of a split.

const greeting = "red,orange,yellow,green,blue,indigo,purple";

const newArray = greeting.split(",");

for (let x of newArray){
    console.log(x);
}