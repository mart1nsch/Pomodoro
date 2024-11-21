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
    try {
        const inputFlow = document.querySelector("#input-time");
        localStorage.setItem("secondsFlow", returnMinutesToSeconds(inputFlow.value));
        secondsFlow = returnMinutesToSeconds(inputFlow.value);

        const inputPause = document.querySelector("#input-pause");
        localStorage.setItem("secondsPause", returnMinutesToSeconds(inputPause.value));
        secondsPause = returnMinutesToSeconds(inputPause.value);

        const checkPauseAutomatic = document.querySelector("#input-check-pause-automatic");
        localStorage.setItem("automaticPause", checkPauseAutomatic.checked);
        automaticPause = checkPauseAutomatic.checked;
        
        const nightModeElement = document.querySelector("#input-night-mode");
        localStorage.setItem("nightMode", nightModeElement.checked);
        nightMode = nightModeElement.checked;
        
        if (nightMode) {
            setColors(`night`);
        } else {
            setColors(`day`);
        }

        if (!interval) {
            const h1MainElement = document.querySelector(".time");
            h1MainElement.innerText = returnSecondsToMinutes(secondsFlow);
        }

        messageControl("confirmation", "Alterações salvas com Sucesso!");
    } catch (e) {
        console.log(e);
    }
}

function setColors(type) {
    const bodyElement = document.querySelector(`body`);
    const headerElement = document.querySelector(`header`);
    const titleSettingsElement = document.querySelector(`.container-settings h1`);
    const settingsInputsElement = document.querySelectorAll(`.container-inputs`);
    const checkboxesElement = document.querySelectorAll(`.checkbox`);
    const inputsElement = document.querySelectorAll(`.input-number`);
    const imgReturnArrowElement = document.querySelector(`#img-return`);
    const imgSettingsElement = document.querySelector(`#img-settings`);
    const lineElement = document.querySelector(`.line`);
    const lineContainerElement = document.querySelector(`.line-container`);
    const timeElement = document.querySelector(`.time`);

    if (type === `night`) {
        bodyElement.style.backgroundColor = `var(--color-black)`;
        bodyElement.style.color = `var(--color-white)`;
        headerElement.style.borderBottom = `2px solid var(--color-white)`;
        titleSettingsElement.style.borderBottom = `1px solid var(--color-white)`;
        for (input of settingsInputsElement) {
            input.style.borderBottom = `1px solid var(--color-white)`;
        }
        for (checkbox of checkboxesElement) {
            checkbox.style.border = `2px solid var(--color-white)`;
        }
        for (input of inputsElement) {
            input.style.color = `var(--color-white)`;
            input.style.backgroundColor = `var(--color-black)`;
        }
        imgReturnArrowElement.src = `./assets/img/return-white.png`;
        imgSettingsElement.src = `./assets/img/settings-white.png`;
        lineElement.style.backgroundColor = `var(--color-white)`;
        lineContainerElement.style.backgroundColor = `var(--color-black-gray)`;
        if (timeElement.style.color === `var(--color-black)`) {
            timeElement.style.color = `var(--color-white)`;
        }
    } else if (type === `day`) {
        bodyElement.style.backgroundColor = `var(--color-white)`;
        bodyElement.style.color = `var(--color-black)`;
        headerElement.style.borderBottom = `2px solid var(--color-black)`;
        titleSettingsElement.style.borderBottom = `1px solid var(--color-black)`;
        for (input of settingsInputsElement) {
            input.style.borderBottom = `1px solid var(--color-black)`;
        }
        for (checkbox of checkboxesElement) {
            checkbox.style.border = `2px solid var(--color-black)`;
        }
        for (input of inputsElement) {
            input.style.color = `var(--color-black)`;
            input.style.backgroundColor = `var(--color-white)`;
        }
        imgReturnArrowElement.src = `./assets/img/return-black.png`;
        imgSettingsElement.src = `./assets/img/settings-black.png`;
        lineElement.style.backgroundColor = `var(--color-black)`;
        lineContainerElement.style.backgroundColor = `var(--color-white-gray)`;
        if (timeElement.style.color === `var(--color-white)`) {
            timeElement.style.color = `var(--color-black)`;
        }
    }
}

const saveSettingsButton = document.querySelector(".button-save");
saveSettingsButton.addEventListener("click", saveSettings);

if (nightMode) {
    setColors(`night`);
} else {
    setColors(`day`);
}
