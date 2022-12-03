"use strict";
// Selections
const startButton = document.querySelector(".button--start");
const gameDisplay = document.querySelector(".game-display");

// Helper functions
const toggleHidden = function () {
  this.classList.toggle("hidden");
  gameDisplay.classList.remove("hidden");
};

// Events
startButton.addEventListener("click", toggleHidden);
