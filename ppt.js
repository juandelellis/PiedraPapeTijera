var userScore = 0;
var computerScore = 0;
var userScoreSpan = document.getElementById("user-score");
var computerScoreSpan = document.getElementById("computer-score");
var scoreBoardDiv = document.querySelector(".score-board");
var resultP = document.querySelector(".result > p");
var piedraDiv = document.getElementById("piedra");
var papelDiv = document.getElementById("papel");
var tijeraDiv = document.getElementById("tijera");


function getComputerChoice(){
    var choices = ["piedra", "papel", "tijera"];
    var randomNumber = (Math.floor(Math.random() * 3));
    return choices [randomNumber];
}

function convertirAPalabra(palabra) {
 if (palabra === "piedra") return "Piedra";
 if (palabra === "tijera") return "Tijera";
 return "Papel";
}

function gana(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = `${convertirAPalabra(userChoice)} ${smallUserWord} le gana a ${convertirAPalabra(computerChoice)} ${smallCompWord} . Ganaste 🔥`;
    document.getElementById (userChoice).classList.add("green-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("green-glow")}, 300);
} 

function pierde(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    resultP.innerHTML = `${convertirAPalabra(userChoice)} ${smallUserWord} pierde con ${convertirAPalabra(computerChoice)} ${smallCompWord} . Perdiste 😩`;
    document.getElementById (userChoice).classList.add("red-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("red-glow")}, 300);
} 

function empata(userChoice, computerChoice) {
    var smallUserWord = "user".fontsize(3).sup();
    var smallCompWord = "comp".fontsize(3).sup();
    resultP.innerHTML = `${convertirAPalabra(userChoice)} ${smallUserWord} empata con ${convertirAPalabra(computerChoice)} ${smallCompWord} . Empate 🤖`;
    document.getElementById (userChoice).classList.add("grey-glow");
    setTimeout(function() {document.getElementById(userChoice).classList.remove("grey-glow")}, 300);
} 

function game(userChoice) {
 var computerChoice = getComputerChoice();
 switch (userChoice + computerChoice){
     case "piedratijera":
     case "papelpiedra":
     case "tijerapapel":
     gana (userChoice, computerChoice);
     break;
     case "piedrapapel":
     case "papeltijera":
     case "tijerapiedra":
     pierde(userChoice, computerChoice);
     break;
     case "piedrapiedra":
     case "papelpael":
     case "tijeratijera":
     empata(userChoice, computerChoice);
     break;
 }
}



function main(){
piedraDiv.addEventListener('click', function () {
        game("piedra");
});

papelDiv.addEventListener('click', function () {
    game("papel");
});

tijeraDiv.addEventListener('click', function () {
    game("tijera");
});
}

main();