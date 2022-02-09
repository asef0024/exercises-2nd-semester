"use strict";

let letters = ["a", "b", "c","d","e","f","g","h"];

console.log(letters[4]);

let newarr = letters;
newarr[4] = "*";

console.log(letters[4]);
console.log(newarr);

const people = ["Harry", "Ron", "Hermione"];
console.log(people.toString());
let result;

console.log(people);

//push tilføjer element til array
console.log(result = people.push("Draco"));
//pop fjerner sidste element tilføjet til array
console.log(result = people.pop());
console.log(result = people.push("Neville"));
console.log(result = people.push("Luna"));
//slice laver et "shallow copy" af array 
console.log(result = people.slice(0,3));
//splice(start, deleteCount, item1)
console.log(result = people.splice(1,0,"Cho"));
console.log(people);
console.log(people[1]="Ginny");
console.log(people);
console.log(result = people.push("Fred","George"));
console.log(people);
console.log(result = people.indexOf("Fred"));
// splice(start, deleteCount)
console.log(result = people.splice(result,1));
console.log(people);
//shift fjerner det første element i array
console.log(result = people.shift());
console.log(people);
//unshift tilføjer et element til starten af array - husk værdi
console.log(result = people.unshift("Asefeh"));
console.log(people);

const lettersArr = Array.from("abcdefghijklmn");
const str = "abcdefghijklmn";
console.log(str[2]);
console.log(str);

const arr1 = str.split();
console.log(arr1);
const arr2 = Array.from(str);
console.log(arr2);