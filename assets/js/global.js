let secondsFlow = 1500;
let secondsPause = 120;
let secondsSpecialPause = 300;
let automaticPause = true;
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
