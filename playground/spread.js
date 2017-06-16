// function add (a, b) {
//     return a + b;
// };

// console.log(add(3, 1));

// var toAdd = [9, 5];

// console.log(add(...toAdd));

// var groupA = ["Zerk","Mala"];
// var groupB = ["Diane"];
// var final = [...groupA, 5, ...groupB];
// // WOW !
// console.log(final);

var person = ["Zerkane", 23];
var personTwo = ["Mala", 23];

function greeting(name, age) {
    return "Hi " + name + ", you are " + age;
}

var names = ["Zerkane","Maladath"];
var final = [...names,"Mohamed"];

final.forEach(function(name){
    console.log("Hi, " + name);
});

console.log(greeting(...person));
