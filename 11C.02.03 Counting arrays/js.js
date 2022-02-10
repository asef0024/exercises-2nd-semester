"use strict"


let arr = [0]
// let counter = array[0]++; 
let counter= arr[0];

window.addEventListener("DOMContentLoaded", initFunc);


function initFunc() {
    if (arr.length < 9){
        counter++;
      
        arr.unshift(counter);
        console.log(arr);
        setTimeout(initFunc, 1000);
       
      
    // } else if (counter < 22){
    //     counter++;
    //     arr.unshift(counter);
    //     setTimeout(initFunc, 1000);
    // }
}}

