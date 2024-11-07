let secondsFlow;
let secondsPause;
let secondsSpecialPause = 300;
let automaticPause;
let cyclesToday = 0;

function addZeroLeft(number){
    return number >= 10 ? number : `0${number}`;
}

function animateLine(type, seconds){
    const line = document.querySelector(".line");

    if (type === "flow" || type === "pause") {
        line.style.animation = `linear ${seconds}s ${type}`;
    } else {
        line.style.animation = "";
    }
}

function returnSecondsToMinutes(number){
    const minutesLeft = addZeroLeft(Math.floor((number / 60)));
    const secondsLeft = addZeroLeft(number - (minutesLeft * 60));

    return `${minutesLeft}:${secondsLeft}`;
}

function returnMinutesToSeconds(number){
    return (number * 60);
}

function setUITime(time){
    const timeMinutes = returnSecondsToMinutes(time);
    timeElement.innerText = timeMinutes;
}

function sendNotification(type){
    if (Notification.permission === "granted") {
        const message = assemblyMessage(type);

        if (message) {
            const notification = new Notification("Pomodoro Clock", { body: message });
        }
    } else if(Notification.permission === "default") {
        Notification.requestPermission();
    }
}

function assemblyMessage(type){
    let message;

    if (type === "pause") {
        message = `Flow concluído! Hora da pausa de ${returnSecondsToMinutes(secondsPause)} minutos!`;
    } else if (type === "flow") {
        message = `Voltando ao Flow de ${returnSecondsToMinutes(secondsFlow)} minutos!`;
    }

    return message;
}

function showSettings(){
    const divSettingsElement = document.querySelector(".container-settings");
    divSettingsElement.style.display = "flex";

    const divTimerElement = document.querySelector(".container-timer");
    divTimerElement.style.display = "none";
}

function returnSettings(){
    const divSettingsElement = document.querySelector(".container-settings");
    divSettingsElement.style.display = "none";

    const divTimerElement = document.querySelector(".container-timer");
    divTimerElement.style.display = "flex";
}

function getLocalStorageData(){
    secondsFlow = localStorage.getItem("secondsFlow");
    secondsPause = localStorage.getItem("secondsPause");
    automaticPause = localStorage.getItem("automaticPause");

    secondsFlow = secondsFlow ? secondsFlow : 1500;
    secondsPause = secondsPause ? secondsPause : 120;
    automaticPause = automaticPause ? automaticPause : true;
}

getLocalStorageData();
