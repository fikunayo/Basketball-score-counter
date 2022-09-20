// HOME SCORE BOARD
let homeScoreDispaly = document.getElementById("home-score-display");
let homeBtn1 = document.getElementById("home-btn1");
let homeBtn2 = document.getElementById("home-btn2");
let homeBtn3 = document.getElementById("home-btn3")
//console.log(homeBtn2.textContent)


function homeAdd1 (){
    let value = +homeScoreDispaly.textContent + 1;
    homeScoreDispaly.textContent = value
}

function homeAdd2 (){
    let value = +homeScoreDispaly.textContent + 2;
    homeScoreDispaly.textContent = value
}

function homeAdd3(){
    let value = +homeScoreDispaly.textContent + 3;
    homeScoreDispaly.textContent = value
}

// GUEST SCORE BOARD
let guestScoreDispaly = document.getElementById("guest-score-display");
let guestBtn1 = document.getElementById("guest-btn1");
let guestBtn2 = document.getElementById("guest-btn2");
let guestBtn3 = document.getElementById("guest-btn3")
//console.log(guestBtn3.textContent)


function guestAdd1 (){
    let value = +guestScoreDispaly.textContent + 1;
    guestScoreDispaly.textContent = value
}

function guestAdd2 (){
    let value = +guestScoreDispaly.textContent + 2;
    guestScoreDispaly.textContent = value
}

function guestAdd3 (){
    let value = +guestScoreDispaly.textContent + 3;
    guestScoreDispaly.textContent = value
}