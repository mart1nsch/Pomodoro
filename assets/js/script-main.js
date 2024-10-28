let interval;
let timeFlow;

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
    setUITime();
}

function setUITime(){
    const flowTime = returnSecondsToMinutes();
    timeElement.innerText = flowTime;
}

function returnSecondsToMinutes(){
    const minutesLeft = addZeroLeft(Math.floor((timeFlow / 60)));
    const secondsLeft = addZeroLeft(timeFlow - (minutesLeft * 60));

    return `${minutesLeft}:${secondsLeft}`;
}

function shutFlow(){
    clearInterval(interval);
    timeFlow = secondsFlow;
    setUITime();
    animateLine("shut");
    showStartButton();
    document.querySelector(".button-shut").style.display = "none";
}

function showStartButton(){
    buttonStartElement.style.display = "block";
}
