"use strict";

window.addEventListener("DOMContentLoaded", setUp);

function setUp() {
    document.querySelector("#calculate").addEventListener("click", calcClick);
    document.querySelector("#clear").addEventListener("click", calcClear);

}

function calcClick() {
    console.log("calc")
    const opValue = document.querySelector("#operator").value;
    const firstNumber = Number(document.querySelector("#firstnumber").value);
    const secondNumber = Number(document.querySelector("#secondnumber").value);

    let result;

    if (opValue === "add"){
        result= firstNumber + secondNumber;
        console.log(result);
    }else if (opValue === "mul"){
        result= firstNumber * secondNumber;
    }else if (opValue === "div"){
        result= firstNumber / secondNumber;
    }else if (opValue === "sub"){
        result= firstNumber - secondNumber;
    }

   let numberOfDecimals = 0;

   if (document.querySelector("#doround").checked){
       numberOfDecimals = doc.querySelector("#decimals").value;
   }
 
   console.log("RESULT", result.toFixed(numberOfDecimals))
}

function calcClick() {
    console.log("clear")
    result= " ";
}