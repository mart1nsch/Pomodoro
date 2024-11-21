let interval;
let seconds = 0;

const timeElement = document.querySelector(".time");

document.addEventListener("click", function(e){
    const element = e.target;

    if (element.className === "button-start") {
        startFlow();
    } else if (element.className === "button-pause") {
        startPause();
    } else if (element.className === "button-shut") {
        shutFlow();
    }
});

function startFlow() {
    if (nightMode) {
        timeElement.style.color = "var(--color-white)";
    } else {
        timeElement.style.color = "var(--color-black)";
    }
    hideButton(document.querySelector(".button-start"));
    showShutButton();

    const secondNow = Math.floor(Date.now() / 1000);
    localStorage.setItem(`startTime`, Number(secondNow));
    localStorage.setItem(`finishTime`, Number(secondNow) + Number(secondsFlow));

    animateLine("shut");

    interval = setInterval(function() {
        const actualSecond = Math.floor(Date.now() / 1000);
        const finishTime = localStorage.getItem(`finishTime`);
        animateLine("flow");

        if ((finishTime - actualSecond) > 0) {
            const timer = createDateFromMiliSeconds((finishTime - actualSecond) * 1000);
            timeElement.innerText = timer.replace(":", " : ");
        } else {
            const timer = createDateFromMiliSeconds(0);
            timeElement.innerText = timer.replace(":", " : ");

            sendNotification("pause");
            playSound();
            clearInterval(interval);
            if (automaticPause) {
                setTimeout(function(){
                    startPause();
                }, 1000);
            } else {
                showPauseButton();
            }
        }
    }, 1000);
}

function startPause() {
    timeElement.style.color = "var(--color-time-pause)";
    hideButton(document.querySelector(".button-pause"));
    hideButton(document.querySelector(".button-shut"));

    const secondNow = Math.floor(Date.now() / 1000);
    localStorage.setItem(`startTime`, Number(secondNow));
    localStorage.setItem(`finishTime`, Number(secondNow) + Number(secondsPause));

    animateLine("shut");
    
    interval = setInterval(function(){
        const actualSecond = Math.floor(Date.now() / 1000);
        const finishTime = localStorage.getItem(`finishTime`);
        animateLine("pause");

        if ((finishTime - actualSecond) > 0) {
            const timer = createDateFromMiliSeconds((finishTime - actualSecond) * 1000);
            timeElement.innerText = timer.replace(":", " : ");
        } else {
            const timer = createDateFromMiliSeconds(0);
            timeElement.innerText = timer.replace(":", " : ");

            playSound();
            sendNotification("flow");
            clearInterval(interval);
            if (automaticPause) {
                setTimeout(function(){
                    startFlow();
                }, 1000);
            } else {
                showButton(document.querySelector(".button-start"));
            }
        }
    }, 1000);
}

function shutFlow(){
    if (nightMode) {
        timeElement.style.color = "var(--color-white)";
    } else {
        timeElement.style.color = "var(--color-black)";
    }
    clearInterval(interval);
    animateLine("shut");

    showButton(document.querySelector(".button-start"));
    hideButton(document.querySelector(".button-pause"));
    hideButton(document.querySelector(".button-shut"));

    const timer = createDateFromMiliSeconds(secondsFlow * 1000);
    timeElement.innerText = timer.replace(":", " : ");

    seconds = 0;
}

function createDateFromMiliSeconds(miliSeconds){
    const date = new Date(miliSeconds);
    const dateFormated = date.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
    return dateFormated.substring(3);
}

function hideButton(button){
    if (button) {
        button.style.display = "none";
    }
}

function showShutButton(){
    const shutElementExist = returnButtonElement(".button-shut");

    if (!shutElementExist) {
        const divTimeElement = document.querySelector(".container-timer-buttons");

        const shutElement = document.createElement("button");
        shutElement.className = "button-shut";
        shutElement.innerText = "Encerrar";
        shutElement.setAttribute("title", "Encerrar Pomodoro");
        divTimeElement.appendChild(shutElement);
    } else {
        shutElementExist.style.display = "block";
    }
}

function showPauseButton(){
    const pauseElementExist = returnButtonElement(".button-pause");

    if (!pauseElementExist) {
        const divTimeElement = document.querySelector(".container-timer-buttons");

        const pauseElement = document.createElement("button");
        pauseElement.className = "button-pause";
        pauseElement.innerText = "Fazer Pausa";
        pauseElement.setAttribute("title", "Fazer Pausa Pomodoro");
        divTimeElement.appendChild(pauseElement);
    } else {
        pauseElementExist.style.display = "block";
    }
}

function returnButtonElement(className){
    const shutElement = document.querySelector(className);
    return shutElement;
}

function showButton(button){
    button.style.display = "block";
}
