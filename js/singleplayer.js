


function chooseBox() {

    this.classList.add("O");
    this.classList.add("freeze");
    linesContainer.classList.add("show")
    check();
    counter--;
    whooseTurn();

    setTimeout(function(){linesContainer.classList.remove("show");} , 1000);

    if (turn.classList.length !== 4) {
        setTimeout(systemTurn, 1001);
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