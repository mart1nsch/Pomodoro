function createMain(){
    const bodyElement = document.querySelector("body");
    const main = document.createElement("main");
    bodyElement.appendChild(main);

    createSettings(main);
}

function createSettings(mainElement){
    const h1 = document.createElement("h1");
    h1.innerText = "Configurações"
    mainElement.appendChild(h1);

    createReturn(mainElement);
    createLabelsAndInputs(mainElement);
}

function createReturn(mainElement){
    const returnArrow = document.createElement("a");
    returnArrow.href = "../html/index.html";
    returnArrow.className = "return-arrow";
    mainElement.appendChild(returnArrow);

    const returnArrowImg = document.createElement("img");
    returnArrowImg.src = "../img/return.png";
    returnArrow.appendChild(returnArrowImg);
}

function createLabelsAndInputs(mainElement){
    createTime(mainElement);
    createPause(mainElement);
    createCheckPauseAutomatic(mainElement);
}

function createTime(mainElement){
    const divTime = createDivInputs();
    mainElement.appendChild(divTime);

    const labelTime = document.createElement("label");
    labelTime.innerText = "Tempo de Flow: ";
    divTime.appendChild(labelTime);

    const inputTime = document.createElement("input");
    inputTime.id = "input-time";
    inputTime.type = "number";
    inputTime.max = 60;
    inputTime.min = 5;
    inputTime.value = returnSecondsToMinutes(secondsFlow);
    divTime.appendChild(inputTime);
}

function createPause(mainElement){
    const divPause = createDivInputs();
    mainElement.appendChild(divPause);

    const labelPause = document.createElement("label");
    labelPause.innerText = "Tempo de Pausa: ";
    divPause.appendChild(labelPause);

    const inputPause = document.createElement("input");
    inputPause.id = "input-pause";
    inputPause.type = "number";
    inputPause.max = 60;
    inputPause.min = 5;
    inputPause.value = returnSecondsToMinutes(secondsPause);
    divPause.appendChild(inputPause);
}

function createCheckPauseAutomatic(mainElement){
    const divCheckPauseAutomatic = createDivInputs();
    mainElement.appendChild(divCheckPauseAutomatic);

    const labelCheckPauseAutomatic = document.createElement("label");
    labelCheckPauseAutomatic.innerText = "Fazer pausa automática? ";
    divCheckPauseAutomatic.appendChild(labelCheckPauseAutomatic);
    
    const inputCheckPauseAutomatic = document.createElement("input");
    inputCheckPauseAutomatic.id = "input-check-pause-automatic";
    inputCheckPauseAutomatic.type = "checkbox";
    inputCheckPauseAutomatic.className = "checkbox";
    divCheckPauseAutomatic.appendChild(inputCheckPauseAutomatic);
}

function createDivInputs(){
    const element = document.createElement("div");
    element.className = "container-inputs";
    return element;
}

function returnSecondsToMinutes(seconds){
    return Math.floor((seconds / 60));
}

createMain();
