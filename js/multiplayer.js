


function chooseBox() {

    if (counter % 2 !== 0) {
        this.classList.add("O");
    }
    else {
        this.classList.add("X");
    }
    this.classList.add("freeze");


    check();

    counter--;

    whooseTurn();


}


for (const box of boxes) {
    box.addEventListener("click", chooseBox);
}







