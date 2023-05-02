# JS Introduction

## Variables

The word "variable" may be most familiar to you from math class, when you often use letters like x or y to represent numbers. This idea also exists in programming languages. Using variables lets us write code that's easier to read and also easier to change. In JavaScript, you initialize variables using the let keyword.

let firstName = "Matt";

## The prompt function

In JavaScript, you can ask the user to provide some information using the prompt function. When you use the prompt function, a pop-up window will appear on the page and ask the user to fill in a text box. You can then store what the user types into a variable. 

let firstName = prompt("What is your first name?");

console.log("Hi, " + firstName + "!");

console.log("How are you doing, " + firstName + "?");

console.log("See you later, " + firstName + "!");

## Primitive Data Types in JavaScript

JavaScript can work with other types of data as well. JavaScript has 6 primitive data types, but we'll only talk about 5 of them. Here's what they look like:

- string - let greeting = "hello";
- number - let favoriteNum = 33;
- boolean - let isAwesome = true;
- undefined - let foo; or let setToUndefined = undefined; null - let empty = null;

### string

A string is a set of characters enclosed in quotes. A string can be defined using double quotes:

let greeting = "Hello Whiskey";

or using single quotes:

let greeeting = 'Hello World';

### number

JavaScript numbers can be positive, negative, decimal numbers:

let num = 5;

let num = -25;

let piApproximation = 3.14159265;

### boolean

A boolean type can only be in one of two states, true or false:

let pizzaIsGood = true;

let pizzaIsBad = false;

### undefined

Any variable that is created in JavaScript that is not assigned a value is undefined:

let favoriteFood = undefined;

### null

Null is not the same as undefined. It signifies an intentional absence of data.

let secondEmailAddress = null;

It is important to remember that null and undefined are different types in JavaScript! This can be a confusing feature of JavaScript, even for people who know other programming languages. 

## Figuring out a variable's type in JavaScript

In JavaScript, we have a keyword called typeof that returns the type of the variable.

- typeof ""; - "string"
- typeof 5; - "number"
- typeof false; - "boolean"
- typeof Symbol(); - "symbol"
- typeof undefined; - "undefined"
- typeof null; // hmmm, this is not what we expect, it returns "object"!

## Converting between types

Very often you'll need to convert a value from one type to another. For example, maybe you want to do some math on a couple of numbers, but you get the numbers from a form and they have a value of string.

### Converting to a string: toString

The toString method will convert any value which is not undefined or null into a string. Here are a couple of examples:

let num = 5;
let bool = true;

num.toString(); // "5";
bool.toString(); // "true";

## Converting to a number

There are several ways you can convert a value to a number. One way is to parse the number, using parseInt or parseFloat: each function will look at a string from left to right and try to make sense of the characters it sees as numbers

- parseInt("2"); // 2
- parseFloat("2"); // 2
- parseInt("3.14"); // 3
- parseFloat("3.14"); // 3.14
- parseInt("2.3alkweflakwe"); // 2
- parseFloat("2.3alkweflakwe"); // 2.3
- parseInt("w2.3alkweflakwe"); // NaN (not a number)
- parseFloat("w2.3alkweflakwe"); // NaN (not a number)

A nice shorthand for this conversion is the unary operator +:

- +"2"; // 2
- +"3.14"; // 3.14
- +"2.3alkweflakwe"; // NaN
- +"w2.3alkweflakwe"; // NaN

## Converting to a boolean: !!

!! will convert a value to its boolean equivalent. Here are a couple of examples:

let greeting = "hi";
let nothing = 0;

!!greeting; // true
!!nothing; // false

## A very quick note on var and const

There are two other keywords that we can use to declare variables in JavaScript, var and const. You might see var in some older tutorials; it is much more rarely used in modern JavaScript. const is an alternative to let but it does not allow you to redeclare, which makes it useful for variables that you do not want changed. 
