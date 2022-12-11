"use strict";
// SELECTIONS
const startButton = document.querySelector(".button--start");
const gameDisplay = document.querySelector(".game-display");
const dropdown = document.querySelector("select");
const configurationDisplay = document.querySelector(".configuration-display");
const greetingArea = document.querySelector(".greeting-area");
const questionArea = document.querySelector(".question-area");
const answerArea = document.querySelector(".answer-area");
const questionAnswerWrapper = document.querySelector(
  ".question-answer-wrapper"
);

// HELPER FUNCTIONS
const toggleHidden = function () {
  this.classList.toggle("hidden");
  gameDisplay.classList.remove("hidden");
  questionAnswerWrapper.classList.remove("hidden");

  configurationDisplay.classList.add("hidden");
  greetingArea.classList.add("hidden");
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

////// fa sa dispara chestiile de pe pagina de start dupa ce apesi butonul
