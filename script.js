"use strict";
// SELECTIONS
const startButton = document.querySelector(".button--start");
const gameDisplay = document.querySelector(".game-display");
const dropdown = document.querySelector("select");

// HELPER FUNCTIONS
const toggleHidden = function () {
  this.classList.toggle("hidden");
  gameDisplay.classList.remove("hidden");
};
// CATEGORY DROPDOWN
let categories = [];
fetch("https://opentdb.com/api_category.php")
  .then((response) => response.json())
  .then((data) => {
    categories = [...data.trivia_categories];
    console.log(categories);
    categories.forEach((category) => {
      const dropdownOption = document.createElement("option");
      dropdownOption.textContent = category.name;
      dropdown.appendChild(dropdownOption);
    });
  });

// TRIVIA API
fetch(
  "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
)
  .then((response) => response.json())
  .then((data) => console.log(data));

// EVENTS
startButton.addEventListener("click", toggleHidden);
