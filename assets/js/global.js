let secondsFlow = 1500;
let secondsPause = 120;
let secondsSpecialPause = 300;

function addZeroLeft(number){
    return number >= 10 ? number : `0${number}`;
}

function animateLine(type){
    const line = document.querySelector(".line");

    if (type === "start") {
        line.style.animation = `flow ${secondsFlow}s`;
    } else {
        line.style.animation = "";
    }
}