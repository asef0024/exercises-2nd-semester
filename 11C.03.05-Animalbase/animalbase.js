"use strict";

const HTML = {};

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];
let filteredAnimals;

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start( ) {
    console.log("ready");
   

    // TODO: Add event-listeners to filter and sort buttons
    HTML.allFilterBtn = document.querySelectorAll("[data-action=filter]");
    HTML.allSortBtn = document.querySelectorAll("[data-action=sort]");

    // Add event-listeners to btn and run the filter animal list
    HTML.allFilterBtn.forEach((btn) => {
        btn.addEventListener("click", filterAnimals);
    });
    HTML.allSortBtn.forEach((btn) => {
        btn.addEventListener("click", sortAnimals);
    });

    loadJSON();
}


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( preapareObject );

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
    
    filteredAnimals = allAnimals;
}

function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}


function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
    
   
}


// filter all
// function all() {
//     return true;
// }
// // filter only cats
// function isCat(animal) {
//     if(animal.type === "cat") {
//         return true; 
//     } else {
//         return false;
//     }
// }; 

// // filter dogs 
// function isDog(animal) {
//     if(animal.type === "dog") {
//         return true; 
//     } else {
//         return false;
//     }
// };


function filterAnimals(){
    let type = this.dataset.filter
    if (type === "*"){
        filteredAnimals = allAnimals;
    }else{
        filteredAnimals = allAnimals.filter(isAnimalType);

        function isAnimalType(animal) {
            if(animal.type === type){
                return true; 
            } else {
                return false;
            }
        }
    }
    displayList(filteredAnimals)
}
// //Click on a filer filters table
// function prepareAnimals(filterFunction){
//     //filter on a criteia
//     filteredAnimals = allAnimals.filter(filterFunction);
//     displayList(filteredAnimals);
// };

function sortAnimals(){
    let sortFilter = this.dataset.sort;

    if (sortFilter === "name"){
        filteredAnimals.sort(compareName);
    } else if (sortFilter === "type"){
        filteredAnimals.sort(compareType);
    } else if (sortFilter === "desc"){
        filteredAnimals.sort(compareDesc);
    } else if (sortFilter === "age"){
            filteredAnimals.sort(compareAge);
    } 
    displayList(filteredAnimals)
};


function compareName(a,b){
    if (a.name < b.name){
        return -1;
    } else {
        return 1;
    }
};
function compareType(a, b) {
    if (a.type < b.type) {
      return -1;
    } else {
      return 1;
    }
  }
  
  function compareDesc(a, b) {
    if (a.desc < b.desc) {
      return -1;
    } else {
      return 1;
    }
  }
  
  function compareAge(a, b) {
    if (a.age < b.age) {
      return -1;
    } else {
      return 1;
    }
  }