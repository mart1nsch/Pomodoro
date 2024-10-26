function createHeader(){
    const bodyElement = document.querySelector("body");
    const header = document.createElement("header");
    bodyElement.appendChild(header);

    createTitle(header);
    createLinks(header);
}

function createTitle(headerElement){
    const h1 = document.createElement("h1");
    h1.innerText = "Pomodoro Clock";
    headerElement.appendChild(h1);
}

function createLinks(headerElement){
    const div = document.createElement("div");
    div.className = "links";
    headerElement.appendChild(div);

    createLinksChild(div);
}

function createLinksChild(divElement){
    const settings = document.createElement("a");
    settings.href = "../html/settings.html";
    divElement.appendChild(settings);

    const settingsImg = document.createElement("img");
    settingsImg.src = "../img/settings.png";
    settingsImg.alt = "Configurações";
    settings.appendChild(settingsImg);

    const linkedinImg = document.createElement("img");
    linkedinImg.src = "../img/linkedin.png";
    linkedinImg.alt = "Ícone Linkedin";
    divElement.appendChild(linkedinImg);

    const linkedin = document.createElement("a");
    linkedin.href = "https://www.linkedin.com/in/martin-schneider-2b8aba213/";
    linkedin.target = "blanck";
    linkedin.innerText = "Linkedin";
    divElement.appendChild(linkedin);
}

createHeader();
