function validateFlow(){
    if (this.value > 60) {
        this.value = 60;
    } else if (this.value < 1) {
        this.value = 1;
    }
}

function addEventFlowInput(){
    const flowInput = document.querySelector("#input-time");
    flowInput.addEventListener("keyup", validateFlow);
}

addEventFlowInput();

function validatePause(){
    if (this.value > 10) {
        this.value = 10;
    } else if (this.value < 1) {
        this.value = 1;
    }
}

function addEventPauseInput(){
    const pauseInput = document.querySelector("#input-pause");
    pauseInput.addEventListener("keyup", validatePause);
}

addEventPauseInput();

function saveSettings(){
    const inputFlow = document.querySelector("#input-time");
    localStorage.setItem("secondsFlow", returnMinutesToSeconds(inputFlow.value));
    secondsFlow = returnMinutesToSeconds(inputFlow.value);

    const inputPause = document.querySelector("#input-pause");
    localStorage.setItem("secondsPause", returnMinutesToSeconds(inputPause.value));
    secondsPause = returnMinutesToSeconds(inputPause.value);

    const checkPauseAutomatic = document.querySelector("#input-check-pause-automatic");
    localStorage.setItem("automaticPause", checkPauseAutomatic.checked);
    automaticPause = checkPauseAutomatic.checked;

    const h1MainElement = document.querySelector(".time");
    h1MainElement.innerText = returnSecondsToMinutes(secondsFlow);
    
    messageControl("confirmation", "Alterações salvas com Sucesso!");
}

const saveSettingsButton = document.querySelector(".button-save");
saveSettingsButton.addEventListener("click", saveSettings);
