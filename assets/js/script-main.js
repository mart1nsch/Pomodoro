let interval;
let intervalTime;
let time;
let timePause;
let previousTime;

const buttonStartElement = document.querySelector(".button-start");
const timeElement = document.querySelector(".time");
const mainElement = document.querySelector("main");

buttonStartElement.addEventListener("click", startFlow);

function startFlow(){
    showShutButton();
    hideStartButton();
    localStorage.setItem("segundoInicio", Math.floor(Date.now() / 1000));
    time = secondsFlow;
    intervalTime = setInterval(controlSeconds, 1000);
    interval = setInterval(deductSecond, 10);
    animateLine("flow", secondsFlow);
}

function showShutButton(){
    const shutElementExist = returnShutElement();

    if (!shutElementExist) {
        const shutElement = document.createElement("button");
        shutElement.className = "button-shut";
        shutElement.innerText = "Encerrar";
        mainElement.appendChild(shutElement);
        addEventShut(shutElement);
    } else {
        shutElementExist.style.display = "block";
    }
}

function returnShutElement(){
    const shutElement = document.querySelector(".button-shut");
    return shutElement;
}

function addEventShut(element){
    element.addEventListener("click", shutFlow);
}

function hideStartButton(){
    buttonStartElement.style.display = "none";
}

function controlSeconds(){
    const nowSecond = Math.floor(Date.now() / 1000);
    previousTime = time;
    time -= (nowSecond - localStorage.getItem("segundoInicio"));
}

function deductSecond(){
    if (previousTime !== time) {
        setUITime(time);
        
        if (time === 0) {
            finishFlow();
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
    clearInterval(interval);
    clearInterval(intervalTime);
    startPause();
    addCycle();
    sendNotification("pause");
}

function startPause(){
    const timeElement = document.querySelector(".time");
    timeElement.style.color = "var(--color-time-pause)";

    const pauseTimeMinutes = returnSecondsToMinutes(secondsPause);
    timeElement.innerText = pauseTimeMinutes;

    time = secondsPause;
    intervalTime = setInterval(controlSeconds, 1000);
    interval = setInterval(deductSecondPause, 10);
    animateLine("shut", secondsPause);
    animateLine("pause", secondsPause);
}

function deductSecondPause(){
    if (previousTime !== time) {
        setUITime(time);
        
        if (time === 0) {
            clearInterval(interval);
            clearInterval(intervalTime);
            const timeElement = document.querySelector(".time");
            timeElement.style.color = "black";
            restartFlow();
        }
    }
}

function restartFlow(){
    h1Main.innerText = returnSecondsToMinutes(secondsFlow);
    time = secondsFlow;
    intervalTime = setInterval(controlSeconds, 1000);
    interval = setInterval(deductSecond, 10);
    animateLine("shut", secondsFlow);
    animateLine("flow", secondsFlow);
    sendNotification("flow");
}

function addCycle(){
    ++cyclesToday;

    const cycleTodayElement = document.querySelector("#cycle-today");
    cycleTodayElement.innerText = cyclesToday;
}
