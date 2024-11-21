function createMain(){
    const bodyElement = document.querySelector("body");
    const main = document.createElement("main");
    bodyElement.appendChild(main);

    const divTimer = document.createElement("div");
    divTimer.setAttribute("class", "container-timer");
    main.appendChild(divTimer);

    const h1Main = document.createElement("h1");
    h1Main.className = "time";
    h1Main.innerText = returnSecondsToMinutes(secondsFlow);
    divTimer.appendChild(h1Main);

    const lineContainer = document.createElement("div");
    lineContainer.className = "line-container";
    divTimer.appendChild(lineContainer);

    const line = document.createElement("div");
    line.className = "line";
    lineContainer.appendChild(line);

    const divButtons = document.createElement("div");
    divButtons.setAttribute("class", "container-timer-buttons");
    divTimer.appendChild(divButtons);

    const button = document.createElement("button");
    button.className = "button-start";
    button.innerText = "Iniciar";
    button.setAttribute("title", "Iniciar Pomodoro");
    divButtons.appendChild(button);

    const audio = document.createElement(`audio`);
    audio.setAttribute(`id`, `audio-notification`);
    audio.setAttribute(`src`, `../assets/sounds/beep-notification.mp3`);
    audio.setAttribute(`preload`, `auto`);
    bodyElement.appendChild(audio);
}

function createRankingInfo(){
    const divRanking = document.createElement("div");
    divRanking.className = "container-ranking";
    main.appendChild(divRanking);

    const h1Ranking = document.createElement("h1");
    h1Ranking.innerText = "Estatísticas";
    divRanking.appendChild(h1Ranking);

    const cyclesTodayContainer = document.createElement("div");
    cyclesTodayContainer.className = "container-cycles";
    divRanking.appendChild(cyclesTodayContainer);

    const cyclesTodayTitle = document.createElement("span");
    cyclesTodayTitle.innerText = "Ciclos Hoje: "
    cyclesTodayContainer.appendChild(cyclesTodayTitle);

    const cyclesTodayNumber = document.createElement("span");
    cyclesTodayNumber.id = "cycle-today";
    cyclesTodayNumber.innerText = cyclesToday;
    cyclesTodayContainer.appendChild(cyclesTodayNumber);
}

//createRankingInfo();

createMain();
