

let boxes = [...document.querySelectorAll(".shape")];
let counter = 9;




function chooseBox() {
    if (counter % 2 !== 0) {
        this.classList.toggle("O");
    }
    else {
        this.classList.toggle("X");
    }

    this.classList.add("freeze");
    counter--;
}



for (const box of boxes) {
    box.addEventListener("click", chooseBox);
}