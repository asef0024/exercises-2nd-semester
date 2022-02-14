"use strict"

const myName = "Peter Heronimous Lind"

const firstName = console.log(myName.substring(myName.indexOf(0), myName.indexOf(" ")));
const middleName = console.log(myName.substring(myName.indexOf(" "), myName.lastIndexOf(" ")).trim());
const lastName = console.log(myName.substring(myName.lastIndexOf(" ")).trim());

function getNameParts (fullname) {
    const firstName = fullname.substring(fullname.indexOf(0), fullname.indexOf(" "));
    const middleName = fullname.substring(fullname.indexOf(" "), fullname.lastIndexOf(" ")).trim();
    const lastName = fullname.substring(fullname.lastIndexOf(" ")).trim();
    console.log( { firstName, middleName, lastName } );
}

getNameParts("Asefeh Luca Zivlaei");