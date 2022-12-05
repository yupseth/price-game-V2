"use strict";
// SELECTIONS
const startButton = document.querySelector(".button--start");
const gameDisplay = document.querySelector(".game-display");

// HELPER FUNCTIONS
const toggleHidden = function () {
  this.classList.toggle("hidden");
  gameDisplay.classList.remove("hidden");
};

// TRIVIA API
fetch(
  "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

// EVENTS
startButton.addEventListener("click", toggleHidden);
