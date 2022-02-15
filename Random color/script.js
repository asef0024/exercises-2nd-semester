"use strict";

window.addEventListener("DOMContentLoaded", randomBackground);

//sets the backgroundto a randomcolor
function randomBackground(){
    let randomColorReturn = randomColor();
    let rgbObject = rgbToCSS(randomColorReturn);
    let body = document.querySelector("body");
    body.style.backgroundColor = rgbObject;   
};

//returns a randomrgbcolorobject
function randomColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    let rgb = {r, g, b};
    return rgb;
};

//converts argbcolorobject into a CSS colorstring
function rgbToCSS(rgb) {
    let rgbReturn = randomColor();
    let rgbString = `rgb(${rgbReturn.r}, ${rgbReturn.g}, ${rgbReturn.b})`;

    return rgbString;
};
rgbToCSS();

