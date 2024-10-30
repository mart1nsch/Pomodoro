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
    secondsFlow = returnMinutesToSeconds(inputFlow.value);

    const inputPause = document.querySelector("#input-pause");
    secondsPause = returnMinutesToSeconds(inputPause.value);

    const checkPauseAutomatic = document.querySelector("#input-check-pause-automatic");
    automaticPause = checkPauseAutomatic.checked;
}

const saveSettingsButton = document.querySelector(".button-save");
saveSettingsButton.addEventListener("click", saveSettings);
