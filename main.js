


function check() {
    if (counter < 6) {
        if (counter % 2 !== 0) {
            document.querySelector(".resault i").classList.remove("fa-x");
            document.querySelector(".resault i").classList.add("fa-o");
        }
        else {
            document.querySelector(".resault i").classList.remove("fa-o");
            document.querySelector(".resault i").classList.add("fa-x");
        }


        if (boxes[2].outerHTML == boxes[4].outerHTML && boxes[2].outerHTML == boxes[6].outerHTML && boxes[2].classList.length > 2) {
            lines[6].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");

        }

        if (boxes[0].outerHTML == boxes[4].outerHTML && boxes[0].outerHTML == boxes[8].outerHTML && boxes[0].classList.length > 2) {
            lines[7].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[0].outerHTML == boxes[1].outerHTML && boxes[0].outerHTML == boxes[2].outerHTML && boxes[2].classList.length > 2) {
            lines[0].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[3].outerHTML == boxes[4].outerHTML && boxes[3].outerHTML == boxes[5].outerHTML && boxes[4].classList.length > 2) {
            lines[1].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[6].outerHTML == boxes[7].outerHTML && boxes[7].outerHTML == boxes[8].outerHTML && boxes[7].classList.length > 2) {
            lines[2].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[0].outerHTML == boxes[3].outerHTML && boxes[3].outerHTML == boxes[6].outerHTML && boxes[3].classList.length > 2) {
            lines[3].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[1].outerHTML == boxes[4].outerHTML && boxes[1].outerHTML == boxes[7].outerHTML && boxes[1].classList.length > 2) {
            lines[4].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }

        if (boxes[2].outerHTML == boxes[5].outerHTML && boxes[2].outerHTML == boxes[8].outerHTML && boxes[2].classList.length > 2) {
            lines[5].classList.remove("hide");
            linesContainer.classList.add("show")
            turn.classList.add("dnone");
            document.querySelector(".resault").classList.remove("dnone");
        }
    }
}

function whooseTurn() {
    if (counter % 2 !== 0) {
        turn.classList.remove("Xturn");
        turn.classList.add("Oturn");
    }
    else {
        turn.classList.remove("Oturn");
        turn.classList.add("Xturn");
    }

    if (counter === 0) {
        turn.classList.remove("Oturn", "Xturn");
    }
}



function mode() {
    document.body.classList.toggle("light");
}




theme.addEventListener("click", mode);


restart.addEventListener("click", function () {
    window.location.reload(true);
})
