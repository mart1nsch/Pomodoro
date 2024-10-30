let interval;
let timeFlow;
let timePause;

const buttonStartElement = document.querySelector(".button-start");
const timeElement = document.querySelector(".time");
const mainElement = document.querySelector("main");

buttonStartElement.addEventListener("click", startFlow);

function startFlow(){
    showShutButton();
    hideStartButton();
    timeFlow = secondsFlow;
    interval = setInterval(deductSecond, 1000);
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

function deductSecond(){
    timeFlow -= 1;
    setUITime(timeFlow);
    
    if (timeFlow === 0) {
        finishFlow();
    }
}

function shutFlow(){
    clearInterval(interval);
    timeFlow = secondsFlow;
    setUITime(timeFlow);
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
    startPause();
}

function startPause(){
    const time = document.querySelector(".time");
    time.style.color = "var(--color-time-pause)";

    const pauseTimeMinutes = returnSecondsToMinutes(secondsPause);
    timeElement.innerText = pauseTimeMinutes;

    timePause = secondsPause;
    interval = setInterval(deductSecondPause, 1000);
    animateLine("shut", timePause);
    animateLine("pause", timePause);
}

function deductSecondPause(){
    timePause -= 1;
    setUITime(timePause);
    
    if (timePause === 0) {
        clearInterval(interval);
        const timeElement = document.querySelector(".time");
        timeElement.style.color = "black";
        restartFlow();
    }
}

function restartFlow(){
    h1Main.innerText = returnSecondsToMinutes(secondsFlow);
    timeFlow = secondsFlow;
    interval = setInterval(deductSecond, 1000);
    animateLine("shut", secondsFlow);
    animateLine("flow", secondsFlow);
}
