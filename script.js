"use strict";
// Selections
const startButton = document.querySelector(".button--start");

// Helper functions
const toggleHidden = function () {
  this.classList.toggle("hidden");
};

// Events
startButton.addEventListener("click", toggleHidden);
