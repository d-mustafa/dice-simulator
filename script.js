// DICE ROLL SIMULATOR


// HTML Variables
let dropDownList = document.getElementById("drop-down-list");
let rollButton = document.getElementById("roll-button");
let resetButton = document.getElementById("reset-button");
let imgOrText = document.getElementById("img-or-text");
let firstDice = document.getElementById("first-dice");
let secondDice = document.getElementById("second-dice");
let diceRollsBox = document.getElementById("dice-rolls-box");
let history = document.getElementById("history");
let rollCounterEl = document.getElementById("roll-counter");

rollButton.addEventListener("click", rollButtonClicked);
resetButton.addEventListener("click", resetButtonClicked);
imgOrText.addEventListener("click", imgOrTextButtonClicked);

let snakeEyes = false;
let rolls = 0;
let imgOrTextFlag = false;

function imgOrTextButtonClicked() {
    if(imgOrTextFlag){
        imgOrTextFlag = false;
    } else{
        imgOrTextFlag = true;
    }
}
function printHistory(randomDie1, randomDie2){ // chooses between text and image based on the flag's value
    if(imgOrTextFlag){
        history.innerHTML += `<span><img src='images/${randomDie1}.png' class="imghistory">,<img src='images/${randomDie2}.png' class="imghistory">`;
    }else{
        history.innerHTML += `<span>[${randomDie1},${randomDie2}]</span>`;
    }
}

function rollButtonClicked() {
    let option = dropDownList.value;
    switch(option) { // roll based on the option chosen
        case "roll-1":
            rollOnce();
            break;

        case "roll-5":
            for(let i = 0; i < 5; i++){
                rollOnce();
            };
            break;

        case "roll-x":
            let x = prompt("How many times do you want to roll?");
            for(let i = 0; i < x; i++){
                rollOnce();
            };
            break;

        case "roll-snake":
            snakeEyes = false;
            while(true) {
                rollOnce();
                if(snakeEyes){
                    snakeEyes = false;
                    break;
                }
            }
            break;
        
        case "roll-until-x": // user can choose to roll the one die until they get their desired value
            rollUntilX();
            break;

        case "roll-until-x_x": // user can choose to roll the both dices until they get their desired values
            rollUntilX_X();
            break;

        default:
            rollOnce();
    }
}


let reset = false; // If reset is repeatedly pressed, the intervals add up and get faster. This flag is to prevent that
function resetButtonClicked() {
    if(reset){
        reset = false;
        firstDice.src = `images/1.png`;
        secondDice.src = `images/2.png`;

        rotateTimer = setInterval(rotateDice, 0);
        randomizeTimer = setInterval(randomizeDice, 1000);

        history.innerHTML = "";
        rolls = 0;
        rollCounterEl.innerHTML = `${rolls}`;
    }
}


function rollOnce() {
    reset = true;
    clearInterval(rotateTimer);
    clearInterval(randomizeTimer);

    let randomDie1 = Math.floor(Math.random() * 6) + 1
    let randomDie2 = Math.floor(Math.random() * 6) + 1

    firstDice.src = `images/${randomDie1}.png`; // replaces image
    secondDice.src = `images/${randomDie2}.png`;

    printHistory(randomDie1, randomDie2);

    if(randomDie1 == 1 && randomDie2 == 1){ // checks for snake eyes
        snakeEyes = true;
    }

    increaseRolls();
}

function rollUntilX(){
    reset = true;
    clearInterval(rotateTimer);
    clearInterval(randomizeTimer);

    val = prompt("What number are you looking for (between 1 and 6)?");

    if(val > 6 || val < 1){ // prevents crashing
        return;
    }

    let randomDie1 = Math.floor(Math.random() * 6) + 1;
    let randomDie2 = Math.floor(Math.random() * 6) + 1;

    while(true){
        if (val == randomDie1 || val == randomDie2){ // if either die are the users desired value

            firstDice.src = `images/${randomDie1}.png`;
            secondDice.src = `images/${randomDie2}.png`;
        
            printHistory(randomDie1, randomDie2);
            increaseRolls();
            break;
        } else {
            printHistory(randomDie1, randomDie2);

            randomDie1 = Math.floor(Math.random() * 6) + 1;
            randomDie2 = Math.floor(Math.random() * 6) + 1;
            increaseRolls();
        }
    }
}

function rollUntilX_X(){
    reset = true;
    clearInterval(rotateTimer);
    clearInterval(randomizeTimer);

    val1 = prompt("What number should the first dice be (between 1 and 6)?");
    val2 = prompt("What number should the second dice be (between 1 and 6)?");

    if(val1 > 6 || val2 > 6 || val1 < 1 || val2 < 1){ // prevents crashing
        return;
    }

    let randomDie1 = Math.floor(Math.random() * 6) + 1;
    let randomDie2 = Math.floor(Math.random() * 6) + 1;

    while(true){
        if (val1 == randomDie1 && val2 == randomDie2){

            firstDice.src = `images/${randomDie1}.png`;
            secondDice.src = `images/${randomDie2}.png`;
        
            printHistory(randomDie1, randomDie2);
            increaseRolls();
            break;
        } else {
        
            printHistory(randomDie1, randomDie2);

            randomDie1 = Math.floor(Math.random() * 6) + 1;
            randomDie2 = Math.floor(Math.random() * 6) + 1;
            increaseRolls();
        }
    }
}

function increaseRolls(){
        rolls++;
        rollCounterEl.innerHTML = `${rolls}`;
}


// ROTATE DICE ANIMATION
let rotateTimer = setInterval(rotateDice, 0);
let dice1Angle = 0;
let dice2Angle = 0;

function rotateDice(){
    firstDice.style.transform = `rotate(${dice1Angle}Deg)`;
    secondDice.style.transform = `rotate(${dice2Angle}Deg)`;

    dice1Angle += 1;
    dice2Angle += 1;
}

// RANDOMIZE DICE ANIMATION
let randomizeTimer = setInterval(randomizeDice, 1000);

let lastRand1;
let lastRand2;

function randomizeDice(){
    let randomDie1 = Math.floor(Math.random() * 6) + 1
    let randomDie2 = Math.floor(Math.random() * 6) + 1

    while(lastRand1 == randomDie1){ // Prevents the dice from being the same twice
        randomDie1 = Math.floor(Math.random() * 6) + 1;
    }
    while(lastRand2 == randomDie2){
        randomDie2 = Math.floor(Math.random() * 6) + 1;
    }

    lastRand1 = randomDie1;
    lastRand2 = randomDie2;

    firstDice.src = `images/${randomDie1}.png`;
    secondDice.src = `images/${randomDie2}.png`;

}