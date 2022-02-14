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



function hexToRGB(hex) {
   
    let r = parseInt(hex.substring(1,3), 16);
    let g = parseInt(hex.substring(3,5), 16);
    let b = parseInt(hex.substring(5,7), 16);

    let rgb = {r, g, b};

    console.log(`{r:${r}, g:${g}, b:${b}}`);
  
}

hexToRGB("#c0ffee");