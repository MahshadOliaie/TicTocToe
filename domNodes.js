let boxes = document.querySelectorAll(".shape");
let counter = 9;
let lineDir = document.querySelectorAll(".lineDir");
let linesContainer = document.querySelector(".lines")
let theme = document.querySelector(".mode");
let turn = document.querySelector(".turn");
let restart = document.getElementById("restart");

let lines = document.querySelectorAll(".line");
for (const line of lines) {
    line.classList.add("hide");
}