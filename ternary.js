let age = 20
if (age > 18){
console.log("could vote");
} else {
    console.log("go back to school!");
}

// alternate ternary operator
age > 18 ? console.log("go vote!"):console.log("go back to school!")


let weather = prompt("what is the weather outside?")

switch(weather){
    case "rainy":
        console.log("don't forget ypur umbrella!")
        break;
    case "sunny":
        console.log("its nice out!")
        break;
    case "cold":
        console.log("don't forget to wear a jacket!")
        break;
    case "hot":
        console.log("you should hit the beach today")
        break;
    default:
        console.log("I don't know")
}

// Modulous operator

// 10 % 3 = 3 goes into ten 9 times because 3x3 equals 9, so the remainder = 1

let color1 = "black"
let color2 = "red"
let color3 = "yellow"

//  An array is used to store a list of data 
let colors = ["black","red","yellow"]

// CRUD
// Create/add