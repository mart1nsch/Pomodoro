function createSettings(mainElement){
    const divSettings = document.createElement("div");
    divSettings.setAttribute("class", "container-settings");
    mainElement.appendChild(divSettings);

    const h1 = document.createElement("h1");
    h1.innerText = "Configurações"
    divSettings.appendChild(h1);

    createReturn(divSettings);
    createLabelsAndInputs(divSettings);
    createButtons(divSettings);
}

function createReturn(divElement){
    const returnArrow = document.createElement("a");
    returnArrow.addEventListener("click", returnSettings);
    returnArrow.className = "return-arrow";
    returnArrow.setAttribute("title", "Voltar a tela do Pomodoro");
    divElement.appendChild(returnArrow);

    const returnArrowImg = document.createElement("img");
    returnArrowImg.id = `img-return`;
    returnArrowImg.src = nightMode ? "./assets/img/return-white.png" : "./assets/img/return-black.png";
    returnArrow.appendChild(returnArrowImg);
}

function createLabelsAndInputs(divElement){
    createTime(divElement);
    createPause(divElement);
    createCheckPauseAutomatic(divElement);
    createNightMode(divElement);
}

function createTime(divElement){
    const divTime = createDivInputs();
    divElement.appendChild(divTime);

    const labelTime = document.createElement("label");
    labelTime.innerText = "Tempo de Flow: ";
    divTime.appendChild(labelTime);

    const inputTime = document.createElement("input");
    inputTime.id = "input-time";
    inputTime.setAttribute(`class`, `input-number`);
    inputTime.type = "number";
    inputTime.max = 60;
    inputTime.min = 5;
    inputTime.setAttribute(`title`, `Tempo mínimo é 1 minuto.`);
    inputTime.value = returnMinutes(secondsFlow);
    divTime.appendChild(inputTime);
}

function createPause(divElement){
    const divPause = createDivInputs();
    divElement.appendChild(divPause);

    const labelPause = document.createElement("label");
    labelPause.innerText = "Tempo de Pausa: ";
    divPause.appendChild(labelPause);

    const inputPause = document.createElement("input");
    inputPause.id = "input-pause";
    inputPause.setAttribute(`class`, `input-number`);
    inputPause.type = "number";
    inputPause.max = 60;
    inputPause.min = 5;
    inputPause.setAttribute(`title`, `Tempo mínimo é 1 minuto.`);
    inputPause.value = returnMinutes(secondsPause);
    divPause.appendChild(inputPause);
}

function createCheckPauseAutomatic(divElement){
    const divCheckPauseAutomatic = createDivInputs();
    divElement.appendChild(divCheckPauseAutomatic);

    const labelCheckPauseAutomatic = document.createElement("label");
    labelCheckPauseAutomatic.innerText = "Fazer pausa automática? ";
    divCheckPauseAutomatic.appendChild(labelCheckPauseAutomatic);
    
    const inputCheckPauseAutomatic = document.createElement("input");
    inputCheckPauseAutomatic.id = "input-check-pause-automatic";
    inputCheckPauseAutomatic.type = "checkbox";
    inputCheckPauseAutomatic.className = "checkbox";
    inputCheckPauseAutomatic.checked = automaticPause;
    divCheckPauseAutomatic.appendChild(inputCheckPauseAutomatic);
}

function createDivInputs(){
    const element = document.createElement("div");
    element.className = "container-inputs";
    return element;
}

function createButtons(divElement){
    const divButtons = document.createElement("div");
    divButtons.className = "buttons-container";
    divElement.appendChild(divButtons);

    const divButtonSave = document.createElement("div");
    divButtonSave.setAttribute("class", "container-button-save");
    divButtons.appendChild(divButtonSave);

    const buttonSave = document.createElement("button");
    buttonSave.className = "button-save";
    buttonSave.title = "Salvar Alterações";
    divButtonSave.appendChild(buttonSave);

    const imgButtonSave = document.createElement("img");
    imgButtonSave.src = "./assets/img/check-green.png";
    buttonSave.appendChild(imgButtonSave);

    const spanButtonSave = document.createElement("span");
    spanButtonSave.innerText = "Salvar Alterações";
    buttonSave.appendChild(spanButtonSave);
}

function createNightMode(divElement) {
    const divNightMode = createDivInputs();
    divElement.appendChild(divNightMode);

    const labelNightMode = document.createElement("label");
    labelNightMode.innerText = "Modo Noturno";
    divNightMode.appendChild(labelNightMode);
    
    const inputNightMode = document.createElement("input");
    inputNightMode.id = "input-night-mode";
    inputNightMode.type = "checkbox";
    inputNightMode.className = "checkbox";
    inputNightMode.checked = nightMode;
    divNightMode.appendChild(inputNightMode);
}

function returnMinutes(seconds){
    return Math.floor((seconds / 60));
}

createSettings(document.querySelector("main"));
