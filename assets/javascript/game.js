var random = 0
var score = 0
var wins = 0
var losses = 0
var crystals = 0

$(document).ready(function () {
    startGame()
})

function startGame() {
    var randnum1 = Math.floor(Math.random() * 19) + 19;
    $("#blueflower").attr("value", randnum1);
    
    console.log(randnum1);
    var randnum2 = Math.floor(Math.random() * 19) + 19;
    $("#diamond2").attr("value", randnum2);
    console.log(randnum2);
    var randnum3 = Math.floor(Math.random() * 19) + 19;
    $("#greenheart").attr("value", randnum3);
    console.log(randnum3);
    var randnum4 = Math.floor(Math.random() * 19) + 19;
    $("#redstar").attr("value", randnum4);
    console.log(randnum4);
    random = Math.floor(Math.random() * 100) + 19;
    $("#random").text("Match Number: " + random);
    console.log(randnum1, random);
    var targetSum = Math.floor(Math.random() * 100) + 19;
}

$("button").on("click", function (event) {
    event.preventDefault();
    var gemValue = $(this).attr("value");
    score += parseInt(gemValue);
    console.log(score);
    $("#score").text("Your Total Score: "  + score);
    if (score === random) {
        wins++;
        alert("You Win!");
        $("#wins").text("Wins: "  + wins);
        $("#score").text("Your Total Score: "  + score);
        reset();
    }
    else if (score > random) {
        losses++;
        alert("You Lose! :(")
        $("#losses").text("Losses: " + losses);
        reset();
    }
})

function reset() {
    alert("Let's Collect More Crystals!");
    score = 0;
    $("#score").text("Your Total Score: " + score);
    startGame();
}
