"use strict"

// const myName= "peter";

// const peTer= console.log(myName.substring(0,2)+myName.substring(2,3).toUpperCase()+myName.substring(3));

// const PeteR = console.log(myName.charAt(0).toUpperCase()+myName.substring(1,4)+myName.substring(4).toUpperCase());

// const peTer = "peTer"

// const Peter = console.log(peTer.charAt(0).toUpperCase()+peTer.substring(1).toLowerCase());

// function capitalize(str) {
//     console.log(str.charAt(0).toUpperCase()+str.substring(1).toLowerCase());
// }

// capitalize("peTer");


function capitalize(str) {
    return str.charAt(0).toUpperCase()+str.substring(1).toLowerCase();
}

let minReturn = capitalize("peTer");

console.log(minReturn)

