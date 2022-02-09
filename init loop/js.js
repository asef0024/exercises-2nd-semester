"use strict";

const max = 14;

let i = 0;

function init(){
    console.log(max);
    loop();
}

function loop(){
    console.log("hej");
    i++; 
    if (i<max){
        setTimeout(loop, 1000);
    }
}