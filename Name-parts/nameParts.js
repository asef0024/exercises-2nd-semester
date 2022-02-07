"use strict"

const myName = "Peter Heronimous Lind"

const firstName = console.log(myName.substring(myName.indexOf(0), myName.indexOf(" ")));
const middleName = console.log(myName.substring(myName.indexOf(" "), myName.lastIndexOf(" ")).trim());
const lastName = console.log(myName.substring(myName.lastIndexOf(" ")).trim());