"use: strict";

let level = 0;
let userPattern = [];
let gamePattern = [];
let buttonColors = ["green", "red", "yellow", "blue"];
let started = false;

$("html").on("keydown", function () {
  level = 0;
  gamePattern = [];
  userPattern = [];
  if (!started) {
    $("#level-title").text(`Level ${level + 1}`);
    setTimeout(nextSequence, 300);
    started = true;
  }
});

$(".btn").on("click", function (event) {
  animationPressed(event.target.id);
  userPattern.push(event.target.id);
  playSound(userPattern[level]);
  checkAnswer();
});

function nextSequence() {
  $("#level-title").text(`Level ${level + 1}`);
  level = 0;
  userPattern = [];
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function checkAnswer() {
  if (userPattern[level] == gamePattern[level]) {
    level++;
  } else {
    playSound("wrong");
    $("#level-title").text("Game Over, Press any key to restart.");
    $("body").addClass("red");
    setTimeout(function () {
      $("body").removeClass("red");
    }, 100);
    started = false;
  }

  if (level == gamePattern.length && started != false) {
    setTimeout(nextSequence, 500);
  }
}

function animationPressed(text) {
  $("#" + text).addClass("pressed");
  setTimeout(function () {
    $("#" + text).removeClass("pressed");
  }, 100);
}

function playSound(text) {
  let audio = new Audio(`sounds/${text}.mp3`);
  audio.play();
}
