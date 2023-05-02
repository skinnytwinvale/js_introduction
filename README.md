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
