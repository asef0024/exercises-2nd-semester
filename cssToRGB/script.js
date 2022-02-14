"use strict";


//convert integer to string
// let simpleNumberAsString = "234";
// let simpleNumber = parseInt(numberAsString);
// console.log(simpleNumber);



function cssToRGB(cssValue) {
   
 
    let r = parseInt(cssValue.substring(cssValue.indexOf("(")+1,cssValue.indexOf(",")));
    let g = parseInt(cssValue.substring(cssValue.indexOf(" ")+1,cssValue.lastIndexOf(",")));
    let b = parseInt(cssValue.substring(cssValue.lastIndexOf(",")+1,cssValue.lastIndexOf(")")));

    let rgb = {r, g, b};

    console.log(rgb);
  
  
}

cssToRGB("rgb(192, 103, 100)");

