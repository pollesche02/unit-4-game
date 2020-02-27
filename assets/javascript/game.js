var targetSum = 0
var score = 0
var wins = 0
var losses = 0
var crystals = 0

$(document).ready(function () {
    startGame()
})

function startGame() {
    var randnum1 = Math.floor(Math.random() * 19) + 1;
    $("#crystal-1").attr("value", randnum1);
    
    console.log(randnum1);
    var randnum2 = Math.floor(Math.random() * 19) + 1;
    $("#crystal-2").attr("value", randnum2);
    console.log(randnum2);
    var randnum3 = Math.floor(Math.random() * 19) + 1;
    $("#crystal-3").attr("value", randnum3);
    console.log(randnum3);
    var randnum4 = Math.floor(Math.random() * 19) + 1;
    $("#crystal-4").attr("value", randnum4);
    console.log(randnum4);
    targetSum = Math.floor(Math.random() * 100) + 19;
    $("#target").text(targetSum);

    
}

$(".crystal-image").on("click", function (event) {
    event.preventDefault();
    console.log(this)
    var gemValue = $(this).attr("value");
    score += parseInt(gemValue);
    console.log(score);
    $("#total").text(score);
    if (score ===  targetSum) {
        wins++;
        alert("You Win!");
        $("#wins").text(wins);
     
        reset();
    }
    else if (score > targetSum) {
        losses++;
        alert("You Lose! :(")
        $("#losses").text(losses);
        reset();
    }
})

function reset() {
    alert("Let's Collect More Crystals!");
    score = 0;
    $("#total").text(score);
    startGame();
}



