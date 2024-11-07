let interval;
let intervalTime;
let time;
let timePause;
let previousTime;
let secondsFinish;
let secondsNow;
let flowPause = "flow";
let seconds = 0;

const timeElement = document.querySelector(".time");

/*function startFlow(){
    showShutButton();
    hideStartButton();
    flowPause = "flow";

    const timeStart = Math.floor(Date.now() / 1000);
    secondsFinish = timeStart + secondsFlow;
    secondsNow = timeStart;
    previousTime = secondsNow;
    time = secondsFlow;
    intervalTime = setInterval(controlSeconds, 10);
    animateLine("flow", secondsFlow);
}*/

document.addEventListener("click", function(e){
    const element = e.target;

    if (element.className === "button-start") {
        startFlow();
    }
});

function startFlow(){
    showShutButton();
    hideStartButton();
    flowPause = "flow";

    seconds = seconds ? seconds : secondsFlow;
    const h1MainElement = document.querySelector(".time");

    interval = setInterval(function(){
        seconds--;
        const timer = createDateFromMiliSeconds(seconds * 1000);
        h1MainElement.innerText = timer;
        if (seconds === 0) {
            clearInterval(interval);
        }
    }, 1000);
    animateLine("flow", secondsFlow);
}

function createDateFromMiliSeconds(miliSeconds){
    const date = new Date(miliSeconds);
    const dateFormated = date.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
    return dateFormated.substring(3);
}

function showShutButton(){
    const shutElementExist = returnShutElement();

    if (!shutElementExist) {
        const divTimeElement = document.querySelector(".container-timer");

        const shutElement = document.createElement("button");
        shutElement.className = "button-shut";
        shutElement.innerText = "Encerrar";
        divTimeElement.appendChild(shutElement);
        addEventShut(shutElement);
    } else {
        shutElementExist.style.display = "block";
    }
}

function hideStartButton(){
    const buttonStartElement = document.querySelector(".button-start");
    buttonStartElement.style.display = "none";
}

function returnShutElement(){
    const shutElement = document.querySelector(".button-shut");
    return shutElement;
}

function addEventShut(element){
    element.addEventListener("click", shutFlow);
}

function controlSeconds(){
    secondsNow = Math.floor(Date.now() / 1000);

    if (previousTime !== secondsNow) {
        previousTime = secondsNow;
        time = (secondsFinish - secondsNow);
        deductSecond();
    }
}

function deductSecond(){
    setUITime(time);
    
    if (time === 0) {
        if (flowPause === "flow") {
            finishFlow();
        } else if (flowPause === "pause") {
            finishPause();
        }
    }
}

function shutFlow(){
    clearInterval(interval);
    clearInterval(intervalTime);
    time = secondsFlow;
    setUITime(time);
    animateLine("shut", secondsFlow);
    showStartButton();
    document.querySelector(".button-shut").style.display = "none";

    const timeElement = document.querySelector(".time");
    timeElement.style.color = "black";
}

function showStartButton(){
    buttonStartElement.style.display = "block";
}

function finishFlow(){
    clearInterval(intervalTime);
    startPause();
    //addCycle();
    sendNotification("pause");
}

function startPause(){
    const timeElement = document.querySelector(".time");
    timeElement.style.color = "var(--color-time-pause)";

    const pauseTimeMinutes = returnSecondsToMinutes(secondsPause);
    timeElement.innerText = pauseTimeMinutes;

    flowPause = "pause";

    const timeStart = Math.floor(Date.now() / 1000);
    secondsFinish = timeStart + secondsPause;
    secondsNow = timeStart;
    previousTime = secondsNow;
    time = secondsPause;
    intervalTime = setInterval(controlSeconds, 10);
    animateLine("shut", secondsPause);
    animateLine("pause", secondsPause);
}

function finishPause() {
    clearInterval(intervalTime);

    const timeElement = document.querySelector(".time");
    timeElement.style.color = "black";

    restartFlow();
}

function restartFlow(){
    h1Main.innerText = returnSecondsToMinutes(secondsFlow);
    flowPause = "flow";
    
    const timeStart = Math.floor(Date.now() / 1000);
    secondsFinish = timeStart + secondsFlow;
    secondsNow = timeStart;
    previousTime = secondsNow;
    time = secondsFlow;
    intervalTime = setInterval(controlSeconds, 10);
    animateLine("shut", secondsFlow);
    animateLine("flow", secondsFlow);
    sendNotification("flow");
}

function addCycle(){
    ++cyclesToday;

    const cycleTodayElement = document.querySelector("#cycle-today");
    cycleTodayElement.innerText = cyclesToday;
}
