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

    const button = document.createElement("button");
    button.className = "button-start";
    button.innerText = "Iniciar";
    divTimer.appendChild(button);
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
