let gameInp = [];
let userInp = [];

let sGame = false;
let level = 0;
let hLevel = 0;
let head3 = document.querySelector("h3");

let aBtn = ["yellow", "red", "purple", "green"];

document.addEventListener("keydown", function(){
    if(sGame == false){
        sGame = true;
    
        console.log("Game started")
        head3.innerText = "Game Started";
        levelUp();
        // blink();
    }

});

function gameBlink(rBlink){
    rClass = document.querySelector(`.${rBlink}`);
    // console.log(rClass);
    rClass.classList.add("blink");

    setTimeout(function(){
        rClass.classList.remove("blink")
    }, 600);
}
function levelUp(){
    userInp = [];
    level++;
    if(hLevel < level){
        hLevel = level;
    }
    
    // console.log(level);
    head3.innerHTML = `level ${level}`
    let cRan = Math.floor(Math.random()*4);
    // console.log(cRan);
    let rBlink = aBtn[cRan];

    gameInp.push(rBlink);
    
    gameBlink(rBlink);

    console.log(gameInp);
}


let btons = document.querySelectorAll(".btn");

for(btns of btons){
    btns.addEventListener("click", btnPress)
};

function btnPress(){
    if(gameInp.length != 0){
        console.log(this.id);
        let btn = this;
        this.classList.add("selBlink");
        setTimeout(function(){
            btn.classList.remove("selBlink");
        }, 300);
        userInp.push(btn.id);
        console.log(userInp);

        checkAns(userInp.length-1);
    }else{
        alert("Press any key to start");
    }
}

function checkAns(idx){
    if(userInp[idx] === gameInp[idx]){
        
        if(userInp.length == gameInp.length){
            setTimeout(levelUp(), 1000);
        }
    }else{
        head3.innerHTML = `Game over! press any key to start <hr> Your Score was ${level}`;
        sGame = false;
        userInp = [];
        gameInp = [];
        level = 0;
        let head4 = document.querySelector("h4");
        head4.innerText = `highest Score = ${hLevel}`;
        blinkStop();
    }
}

function blinkStop(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(function(){
        body.style.backgroundColor = "white";
    }, 200);
}