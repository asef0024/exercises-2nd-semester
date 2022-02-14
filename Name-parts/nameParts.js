"use strict"

const myName = "Peter Heronimous Lind"

const firstName = console.log(myName.substring(myName.indexOf(0), myName.indexOf(" ")));
const middleName = console.log(myName.substring(myName.indexOf(" "), myName.lastIndexOf(" ")).trim());
const lastName = console.log(myName.substring(myName.lastIndexOf(" ")).trim());


//nameParts functions w parameters
function getNameParts (fullname) {
    const firstName = fullname.substring(fullname.indexOf(0), fullname.indexOf(" "));
    const middleName = fullname.substring(fullname.indexOf(" "), fullname.lastIndexOf(" ")).trim();
    const lastName = fullname.substring(fullname.lastIndexOf(" ")).trim();
    console.log( { firstName, middleName, lastName } );
    // fullname("Potter Harry James");
}

getNameParts("Asefeh Luca Zivlaei");

function fullname(lastName, firstName, middleName) {
    if (middleName == undefined) {
        console.log(firstName + " " + lastName)
    } else {
    console.log(firstName + " " + middleName + " " + lastName); 
}
}

fullname("Potter", "Harry", "James");
fullname("Harry" , "Potter");
fullname("Potter", "Harry");
fullname("Potter", "Harry", "James", "Pottypotpot");
