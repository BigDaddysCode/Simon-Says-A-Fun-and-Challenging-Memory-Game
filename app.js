let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red" , "purple", "green"];
let started = false;
let level = 0;
let highScore = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
//to start the game only one time
document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game Started..");
        started = true;
        levelUp();
    }
});
//to flash a random key 
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;

  // Update high score if current level is higher
  if (level > highScore) {
    highScore = level;
    h3.innerHTML = `High Score: ${highScore}`; // Set entire high score text
  }
    //random button choose
    let randomIndex = Math.floor(Math.random()*4);
    let randomCol = btns[randomIndex];
    let randbtn = document.querySelector(`.${randomCol}`);
    gameSeq.push(randomCol);
    console.log(gameSeq);
    // console.log(randomIndex);
    // console.log(randomCol);
    // console.log(randbtn);
    gameFlash(randbtn);
}; 

function checkAns(idx){
    // console.log(`Current Level - ${level}`);
    if(userSeq[idx]==gameSeq[idx]){
        // console.log("same Value");
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 700);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}
function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);
    usercolor = btn.getAttribute("id");
    // console.log(usercolor);
    userSeq.push(usercolor);
    checkAns(userSeq.length-1);
};
let allBtns = document.querySelectorAll(".btn")
    for(btn of allBtns){
        btn.addEventListener("click", btnPress);
    }

function reset(){
    started=false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};