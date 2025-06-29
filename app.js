const msgContainer = document.querySelector(".winner");
const msg = document.getElementById("msg");
const newbtn = document.getElementById("new-btn")
const boxes = document.querySelectorAll(".box")
const resetBtn = document.querySelector(".btn");

let trunO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6], 
    [0, 4, 8],
    [1, 4, 7], 
    [2, 5, 8],
    [2, 4, 6], 
    [3, 4, 5], 
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener('click', ()=> {
     //   console.log(box);
        if (trunO) {
            box.innerHTML = 'O'
            trunO = false
        }else{
            box.innerHTML = 'X'
            trunO = true
        }
        box.disabled = true;
        checkWinner()
    })
})

const resetGame = () => {
    trunO = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false
        box.innerHTML = ""
    }
}

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true
    }
}

const showWinner = (winners) => {
    msg.innerText = `Congratulations, Winner is ${winners}`
    msgContainer.classList.remove("hide")
    disableBoxes();
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText
        let pos2Val = boxes[pattern[1]].innerText
        let pos3Val = boxes[pattern[2]].innerText

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val == pos3Val) {
              //  console.log(pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}

 newbtn.addEventListener('click', resetGame)
 resetBtn.addEventListener('click', resetGame)