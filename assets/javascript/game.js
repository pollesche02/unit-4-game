
var targetNumber;
var numberOptions;
var counterTotal = 0;

$("#counter-total").text(counterTotal);
$("#counter-total").empty();
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);

var crystalOne = $("#crystal-1");
var crystalTwo = $("#crystal-2");
var crystalThree = $("#crystal-3");
var crystalFour = $("#crystal-4");
var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var ranNums = [];
targetNumber = Math.floor(Math.random() * (120-19)) +19;

$(document).ready(function() {
  var topRanPixels = Math.floor(Math.random() * 300);

  $("#current-random-num").text(counterTotal);

  function restart() {
    counterTotal = 0;
    $("#counter-total").text(counterTotal);
    $("#counter-total").empty();
    $("#current-random-num").empty()
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#current-random-num").text(targetNumber);
    ranNums = [];
    nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    randomCrystalValues();
  }

  function randomCrystalValues() {
    
  }
})