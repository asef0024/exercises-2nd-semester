

document.querySelector("#buttons .rock").addEventListener("click", pickRock);
document.querySelector("#buttons .paper").addEventListener("click", pickPaper);
document.querySelector("#buttons .scissors").addEventListener("click", pickScissors);

// giv computeren et tilfældigt håndtegn

const options = ["rock", "paper", "scissors"];

const random = Math.floor(Math.random() * options.length);

//gem computerens valg som variabel

const p1Pick = (random, options[random]);


function pickRock() {
  console.log("you have selected rock");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsRock);
  document.querySelector("#player2").addEventListener("animationend", showHandsRock);
}

function pickPaper() {
  console.log("you have selected paper");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsPaper);
  document.querySelector("#player2").addEventListener("animationend", showHandsPaper);
}

function pickScissors() {
  console.log("you have selected scissors");
  document.querySelector("#player1").classList.add("player", "shake");
  document.querySelector("#player2").classList.add("player", "shake");

  document.querySelector("#player1").addEventListener("animationend", showHandsScissors);
  document.querySelector("#player2").addEventListener("animationend", showHandsScissors);
}

function reset (){
    window.addEventListener("click", () => {location.reload();
    });
}

function showHandsRock() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_rock.png)";

  if (p1Pick == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  } else if (p1Pick == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  } else if (p1Pick == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  };
  reset();
}

function showHandsPaper() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_paper.png)";

  if (p1Pick == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  } else if (p1Pick == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  } else if (p1Pick == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  }
  reset();
}

function showHandsScissors() {
  document.querySelector("#player2").style.backgroundImage = "url(hand_scissors.png)";

  if (p1Pick == options[0]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_rock.png)";
    console.log("You lose");
    document.querySelector("#lose").classList.remove("hidden");
  } else if (p1Pick == options[1]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_paper.png)";
    console.log("You win");
    document.querySelector("#win").classList.remove("hidden");
  } else if (p1Pick == options[2]) {
    document.querySelector("#player1").style.backgroundImage = "url(hand_scissors.png)";
    console.log("that's a draw");
    document.querySelector("#draw").classList.remove("hidden");
  }
  reset();
}
