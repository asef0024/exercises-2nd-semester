"use strict"

let person1 = {
    firstname: "Peter",
    age : 29,
    student: false
};




let person3 = person1;



let person2 = {
    firstname: "Other Peter",
    age : 29,
    student: false
};

person3.firstname = "Changed"

console.log("person1:");
console.log(person1);
console.log("person2:");
console.log(person2);
console.log("person3:");
console.log(person3);

person3 = person2;

console.log("person1:");
console.log(person1);
console.log("person2:");
console.log(person2);
console.log("person3:");
console.log(person3);

person2.firstname= "also changed";

console.log("person1:");
console.log(person1);
console.log("person2:");
console.log(person2);
console.log("person3:");
console.log(person3);


person1 = person3;

console.log("person1:");
console.log(person1);
console.log("person2:");
console.log(person2);
console.log("person3:");
console.log(person3);