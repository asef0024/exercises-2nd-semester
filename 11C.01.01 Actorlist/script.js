
"use strict"
let actorList;
const actors = "actors.json";
let filter = "alle";


aktiverKnapper();

function aktiverKnapper() {
    const filterButton = document.querySelectorAll(".buttons nav button");
    filterButton.forEach((knap) => knap.addEventListener("click", filterActors));
}

function filterActors() {
    filter = this.dataset.kategori;
    document.querySelector(".valgt").classList.remove("valgt");
    this.classList.add("valgt");
    
    showActors();
}

async function getJson() {
    const data = await fetch(actors);
    actorList = await data.json();
    showActors();
}

getJson();

function showActors() {
    let temp = document.querySelector("template");
    let container = document.querySelector(".elementcontainer");
    container.innerHTML = "";
    actorList.forEach((actor) => {
        if (filter == actor.movie || filter == "alle") {
        let klon = temp.cloneNode(true).content;

    // actorList.forEach((actor) => {
    //     let klon = temp.cloneNode(true).content;
        klon.querySelector("h2").innerHTML = actor.fullname;
        klon.querySelector(".movie").innerHTML = actor.movie;
        klon.querySelector(".læs-mere-knap").addEventListener("click", () => visPopup(actor));
        container.appendChild(klon);
        }
    }); 


    document.querySelector("#popup button").addEventListener("click", lukPopup);

    function lukPopup() {
        document.querySelector("#popup").style.display = "none";
    };
    function visPopup(details) {
        const popup = document.querySelector("#popup");
        popup.style.display = "block";
        popup.querySelector("h2").innerHTML = details.fullname;
        popup.querySelector(".movie").innerHTML = details.movie;

        console.log(details);
    }
}




