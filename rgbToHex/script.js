"use strict";
//ff = 255

//conert from hex to integer
// let numberAsHex = "f3";
// let numberAsInteger = parseInt(numberAsHex, 16); //second argument is the base
// console.log("numberAsInteger",numberAsInteger);

//convert integer to hex
// let someNumberAsInteger = 255;
// let someBase16NumberAsString = someNumberAsInteger.toString(16);
// console.log("someBase16NumberAsString", someBase16NumberAsString);

//convert integer to string
// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);
// console.log(simpleNumber);



function rgbToHex(r, g, b) {
   
    let r1 = ("0" + r.toString(16)).slice(-2);
    let g1 = ("0" + g.toString(16)).slice(-2);
    let b1 = ("0" + b.toString(16)).slice(-2);

    let rgb = `#${r1}${g1}${b1}`;

    console.log(`#${r1}${g1}${b1}`);
    console.log(rgb);
  
}

rgbToHex(192, 255, 238);
