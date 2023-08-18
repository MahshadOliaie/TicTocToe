


function chooseBox() {

    this.classList.add("O");
    this.classList.add("freeze");

    check();
    counter--;
    whooseTurn();


    if (turn.classList.length !== 4) {
        setTimeout(systemTurn, 1000);
    }
}



function systemTurn() {
    let empty = [...document.querySelectorAll(".shape:not(.freeze)")];
    let random = Math.floor(Math.random() * empty.length);
    empty[random].classList.add("X");
    empty[random].classList.add("freeze");

    check();
    counter--;
    whooseTurn();
}

for (const box of boxes) {
    box.addEventListener("click", chooseBox);
}