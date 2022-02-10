"use strict";



window.addEventListener("load", setUp);

let maxLength;
let iterator;
let txt = document.getElementById("typewriter").textContent;
let i = 0;


// function loadFunc(){
//     console.log(txt.length);

//     setUp();
// }
document.querySelector("#typewriter").textContent = "";

function setUp(){
  
    if (i < txt.length){
        document.getElementById("typewriter").textContent += txt.charAt(i);
        i++;
        setTimeout(setUp, 150);
        
        console.log(i);
    }
    // initTextLoop();
}

// function initTextLoop(){
//     iterator = 0;
//     maxLength  = txt.length;
//     textLoop();
// }

// function textLoop(){
//     iterator++; 
//     console.log("im loopin")
//     if (iterator < maxLength){
//         textLoop();
//     }
// }