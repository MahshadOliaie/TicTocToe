
let boxes = document.querySelectorAll(".shape");
let counter = 9;
console.log(boxes)
let lineDir = document.querySelectorAll(".lineDir");
let linesContainer= document.querySelector(".lines")
let theme =document.querySelector(".mode");

let lines =document.querySelectorAll(".line");
for (const line of lines) {
    line.classList.add("hide");
}



function chooseBox() {
    if (counter % 2 !== 0) {
        this.classList.add("O");
    }
    else {
        this.classList.add("X");
    }
    this.classList.add("freeze");
    console.log(boxes[2].classList.length>2)
    if(counter<6){
        if(boxes[2].outerHTML==boxes[4].outerHTML && boxes[2].outerHTML==boxes[6].outerHTML && boxes[2].classList.length>2){
            lines[6].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[0].outerHTML==boxes[4].outerHTML && boxes[0].outerHTML==boxes[8].outerHTML && boxes[0].classList.length>2){
            lines[7].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[0].outerHTML==boxes[1].outerHTML && boxes[0].outerHTML==boxes[2].outerHTML && boxes[2].classList.length>2){
            lines[0].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[3].outerHTML==boxes[4].outerHTML && boxes[3].outerHTML==boxes[5].outerHTML && boxes[4].classList.length>2){
            lines[1].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[6].outerHTML==boxes[7].outerHTML && boxes[7].outerHTML==boxes[8].outerHTML && boxes[7].classList.length>2){
            lines[2].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[0].outerHTML==boxes[3].outerHTML && boxes[3].outerHTML==boxes[6].outerHTML && boxes[3].classList.length>2){
            lines[3].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[1].outerHTML==boxes[4].outerHTML && boxes[1].outerHTML==boxes[7].outerHTML && boxes[1].classList.length>2){
            lines[4].classList.remove("hide");
            linesContainer.classList.add("show")
        }
        
        if(boxes[2].outerHTML==boxes[5].outerHTML && boxes[2].outerHTML==boxes[8].outerHTML && boxes[2].classList.length>2){
            lines[5].classList.remove("hide");
            linesContainer.classList.add("show")
        }
    }
    counter--;
}


function mode(){
    document.body.classList.toggle("light");
}







for (const box of boxes) {
    box.addEventListener("click", chooseBox);
}

theme.addEventListener("click", mode);



