"use strict";



window.addEventListener("load", setUp);

let maxLength;
let iterator;
let txt = document.getElementById("typewriter").textContent;
let i = 0;
let speed = 70;

// function loadFunc(){
//     console.log(txt.length);

//     setUp();
// }
document.querySelector("#typewriter").textContent = "";

function setUp(){
  
    if (i < txt.length){
        console.log("hej");
        document.getElementById("typewriter").textContent += txt.charAt(i);
        i++;
        setTimeout(setUp, 150);
        
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