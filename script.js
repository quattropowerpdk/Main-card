const button = document.querySelector(".pic1");
const button2 = document.querySelector(".pic2");
const button3 = document.querySelector(".pic3");
const button4 = document.querySelector(".pic4");
const button5 = document.querySelector(".pic5");

const hidden = document.querySelector(".answer");
const hidden2 = document.querySelector(".answer2");
const hidden3 = document.querySelector(".answer3");
const hidden4 = document.querySelector(".answer4");
const hidden5 = document.querySelector(".answer5");

const question = document.querySelector(".question");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");
const question5 = document.querySelector(".question5");

button.addEventListener("click", function () {
  hidden.classList.toggle("hidden");
  question.classList.toggle("one");
  button.classList.toggle("rotate");
});

button2.addEventListener("click", function () {
  hidden2.classList.toggle("hidden");
  question2.classList.toggle("one");
  button2.classList.toggle("rotate");
});

button3.addEventListener("click", function () {
  hidden3.classList.toggle("hidden");
  question3.classList.toggle("one");
  button3.classList.toggle("rotate");
});

button4.addEventListener("click", function () {
  hidden4.classList.toggle("hidden");
  question4.classList.toggle("one");
  button4.classList.toggle("rotate");
});

button5.addEventListener("click", function () {
  hidden5.classList.toggle("hidden");
  question5.classList.toggle("one");
  button5.classList.toggle("rotate");
});

const grow = function (x) {
  console.log(x.sort((a, b) => a - b).reduce((a, b) => a * b));
};

grow([1, 2, 3, 4]);
