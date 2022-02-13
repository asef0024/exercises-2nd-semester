"use strict"

const person1 = {
    firstname: "Peter",
    age : 29,
    student: false
};

console.log(person1.lastName);

person1.lastName= "Lind";

console.log(person1.lastName);
console.log(person1);

person1.lastName= undefined;

console.log(person1.lastName);
console.log(person1.middleName);

delete person1.lastName;
console.log(person1.lastName);

person1.age++;
console.log(person1);

const person2 = {
    firstname: "Asefeh",
    age : 33,
    student: true
};

person1 = person2;

