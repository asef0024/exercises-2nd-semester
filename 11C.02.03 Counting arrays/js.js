"use strict"


let arr = [0]
// let counter = array[0]++; 
let counter= arr[0];

window.addEventListener("DOMContentLoaded", initFunc);


function initFunc() {

    if (counter < 22 ){
        setTimeout(addArr, 1000)
    } 
 

}

function addArr () {
   
    if (counter < 10){
        counter++;
        arr.unshift(counter);
       
    } 
     else {
        counter++;
        arr.unshift(counter);
        arr.length =9;
        counter++;
        console.log(arr);
    
    }
    initFunc();
}

