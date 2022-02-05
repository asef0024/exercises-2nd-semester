"use strict";

// let name = `Asefeh`;
// let animal = `kid`;
// let animalName = `Cass`;

// console.log(`My name is ${name}. 
// I have a ${animal} called ${animalName}.`);

let name = "Albus Percival Wulfric Brian Dumbledore";
let firstName = "Dumbledore"
let total = name.length;
console.log(total);
let indexTwo = name[2];
console.log(indexTwo);
let indexSix = name[6];
console.log(indexSix);
let firstD = "D";
console.log(firstName.indexOf(firstD));
let lastE = "e";
console.log(firstName.lastIndexOf(lastE));

const str1 = "    There is    space here \n  ";
const str2 = str1.trim();

console.log(str2);

const fullName = "Peter Heronimus Lind";
let firstName1 = fullName.substring(0, 5);

console.log(`_${firstName1}_`);

let albus = name.substring(0 , 5);
console.log(albus);
let dumbledore = name.substring(29);
console.log(dumbledore);
let wulfric = name.substring(15, 22);
console.log(wulfric);
let _wulfric = name.substring(14, 22);
console.log(_wulfric);
let ian = name.substring(25, 29);
console.log(ian);
let bus = name.substring(2, 5);
console.log(bus);