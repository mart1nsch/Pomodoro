let secondsFlow;
let secondsPause;
let secondsSpecialPause = 300;
let automaticPause;
let nightMode;
let cyclesToday = 0;

function addZeroLeft(number){
    return number >= 10 ? number : `0${number}`;
}

function animateLine(type){
    const line = document.querySelector(".line");

    if (type === "flow" || type === "pause") {
        const startTime = Number(localStorage.getItem(`startTime`));
        const finishTime = Number(localStorage.getItem(`finishTime`));
        const secondNow = Math.floor(Date.now() / 1000);
        const secondsLeft = finishTime - secondNow;

        if (secondsLeft < 0) {
            line.style.width = `100%`;
            return;
        }

        const percentageWidth = 100 - ((secondsLeft * 100) / (finishTime - startTime));

        line.style.width = `${percentageWidth}%`;
    } else {
        line.style.width = 0;
    }
}

function returnSecondsToMinutes(number){
    const minutesLeft = addZeroLeft(Math.floor((number / 60)));
    const secondsLeft = addZeroLeft(number - (minutesLeft * 60));

    return `${minutesLeft} : ${secondsLeft}`;
}

function returnMinutesToSeconds(number){
    return (number * 60);
}

function playSound() {
    try {
        const audioElement = document.querySelector(`#audio-notification`);
        audioElement.play();
    } catch(e) {
        console.log(`Erro audio: `, e);
    }
}

function sendNotification(type){
    if (Notification.permission === "granted") {
        const message = assemblyMessage(type);

        if (message) {
            const notification = new Notification("Pomodoro Clock", { body: message });
        }
    }
}

function assemblyMessage(type){
    if (automaticPause) {
        if (type === "pause") {
            return `Flow concluído! Hora da pausa de ${secondsPause / 60} minuto(s)!`;
        } else if (type === "flow") {
            return `Voltando ao Flow de ${secondsFlow / 60} minuto(s)!`;
        }
    } else {
        if (type === "pause") {
            return `Flow concluído! Faça sua pausa de ${secondsPause / 60} minuto(s)!`;
        } else if (type === "flow") {
            return `Pausa concluída, volte ao Flow de ${secondsFlow / 60} minuto(s)!`;
        }
    }
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
    automaticPause = JSON.parse(localStorage.getItem("automaticPause"));
    nightMode = JSON.parse(localStorage.getItem("nightMode"));

    secondsFlow = secondsFlow ? secondsFlow : 1500;
    secondsPause = secondsPause ? secondsPause : 120;
}

function getPermissionNotifications(){
    if (Notification.permission === "default") {
        Notification.requestPermission();
    }
}

getLocalStorageData();
getPermissionNotifications();
