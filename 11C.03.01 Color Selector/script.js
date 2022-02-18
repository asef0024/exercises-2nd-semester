"use strict";

// let input = document.querySelector("#colorValue");

let rgb;



window.addEventListener("load", start);


function start() {
    document.querySelector("#colorValue").addEventListener("input", showColor);  
    
    console.log("hej") 
}



//convert input value to RGB
function hexToRGB(hex) {
   
    let r = parseInt(hex.substring(1,3), 16).toString();
    let g = parseInt(hex.substring(3,5), 16).toString();
    let b = parseInt(hex.substring(5,7), 16).toString();

    rgb = `${r}, ${g}, ${b}`; 
    displayRgbValue();
    hexToHsl(r, g, b);

}

// hexToRGB(userValue);

//convert input value to HSL
function hexToHsl (r, g, b) {
    
    r /= 255;
    g /= 255;
    b /= 255;
  
    let h, s, l;
  
    const min = Math.min(r,g,b);
    const max = Math.max(r,g,b);
   
    if( max === min ) {
      h = 0;
    } else
    if (max === r) {
      h = 60 * (0 + (g - b) / (max - min) );
    } else
    if (max === g) {
      h = 60 * (2 + (b - r) / (max - min) );
    } else
    if (max === b) {
      h = 60 * (4 + (r - g) / (max - min) );
    }
   
    if (h < 0) {h = h + 360; }
   
    l = (min + max) / 2;
   
    if (max === 0 || min === 1 ) {
      s = 0;
    } else {
      s = (max - l) / ( Math.min(l,1-l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    let hsl = `${h}, ${s}%, ${l}%`;
    console.log(hsl)
    displayHslValue(hsl);
    console.log("hsl(%f,%f%,%f%)", h, s, l); // just for testing
};



//display color
function showColor() {
    let userValue = document.querySelector("#colorValue").value;
    document.querySelector(".colorBox").style.backgroundColor = userValue;
    renderValue(userValue); 
    console.log(userValue)
    console.log("hej linie 82") 
};


//udskrive input værdien i hex felt
function renderValue(userValue) {
    document.querySelector(".hexCode").textContent = userValue;
    displayRgbValue(userValue);
}


// display rgb value funktion
function displayRgbValue() {
    document.querySelector(".rgbCode").textContent = rgb;
    // console.log(rgb);
}


// display hsl value funktion
function displayHslValue(hsl) {
    document.querySelector(".hslCode").textContent = hsl;
    console.log(hsl)
    start();
}
