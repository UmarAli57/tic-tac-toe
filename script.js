let mode = document.querySelector("#mode");
mode.style.textTransform = "capitalize";

let newGame = document.querySelector("#newGame");
let resetBtn = document.querySelector("#resetBtn");
resetBtn.disabled = true;

let boxes = document.querySelectorAll(".box");
let winLose = document.querySelectorAll(".winner");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose")

let winningPatterns = [
    '012', '345', '678', '036', '147', '258', '048', '246'
];

let firstTurnX = true;
let winner = "";


mode.onclick = () => {
    let currMode = localStorage.getItem("theme")?.toLowerCase();
    let changeMode = currMode == "light" ? "dark" : "light";
    mode.textContent = `${currMode} mode`;
    localStorage.setItem('theme', changeMode);
    document.body.classList.toggle('dark');
};

window.addEventListener("load", () => {
    let currMode = localStorage.getItem("theme")?.toLowerCase();
    let changeText = currMode == "light" ? "dark mode" : "light mode";
    mode.textContent = changeText;
    if (currMode == "dark"){
        document.body.classList.add('dark');
    }
});


let ticCount = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        let text = firstTurnX ? "x" : "o";
        box.textContent = text;
        firstTurnX = firstTurnX === true ? false : true;
        box.disabled = true;
        resetBtn.disabled = false;
        let checkWin = checkWinner();
        ticCount++;
        // draw if the game is draw
        if (ticCount === 9 && !checkWin){
            winLose.forEach((w) => {
                w.style.display = "block";
                w.children[0].textContent = "game is draw";
            });
            boxes.forEach((b) => {
                b.style.opacity = "0.76";
            });
            resetBtn.disabled = true;
        }
    });
});



resetBtn.addEventListener("click", reset);

newGame.addEventListener("click", () => {
    // reset();    this is disabled because is newGame body we already loop boxes and this func (reset) also loop boxes, so it slow's the code
    boxes.forEach((box) => {
        box.style.opacity = "1";
        box.innerText = "";
        box.disabled = false;
        resetBtn.disabled = true;
    });
    winLose.forEach((w) => {
        w.style.display = "none";
    });
    win.textContent = "";
    lose.textContent = "";
    winner = "";
    ticCount = 0;
    console.clear();
});

function reset(){
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
        resetBtn.disabled = true;
    });
    ticCount = 0;
}

function checkWinner(){
    for (let pattern of winningPatterns){
        let boxOne = boxes[pattern[0]].innerText;
        let boxTwo = boxes[pattern[1]].innerText;
        let boxThree = boxes[pattern[2]].innerText;

        if (boxOne != "" && boxTwo != "" && boxThree != ""){
            if (boxOne == boxTwo && boxTwo == boxThree){
                boxes.forEach((box) => {
                    box.disabled = true;
                    box.style.opacity = "0.76";
                });
                resetBtn.disabled = true;
                winner = boxOne;

                winLose.forEach((w) => {
                    w.style.display = "block";
                });
                win.innerText = `'${winner}' is the winner`;
                lose.innerText = `'${winner.toLowerCase() == "x" ? "o" : "x"}' is the loser`;
                return true;
            }
        }
    }

    if (winner == ""){
        winLose.forEach((w) => {
            w.style.display = "none";
        });
    }
    return false;
}
