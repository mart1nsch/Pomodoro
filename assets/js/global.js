let secondsFlow = 5;
let secondsPause = 3;
let secondsSpecialPause = 300;
let automaticPause = true;

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
