const bodyElement = document.querySelector("body");
const main = document.createElement("main");
bodyElement.appendChild(main);

const h1Main = document.createElement("h1");
h1Main.className = "time";
h1Main.innerText = returnSecondsToMinutes(secondsFlow);
main.appendChild(h1Main);

const lineContainer = document.createElement("div");
lineContainer.className = "line-container";
main.appendChild(lineContainer);

const line = document.createElement("div");
line.className = "line";
lineContainer.appendChild(line);

const button = document.createElement("button");
button.className = "button-start";
button.innerText = "Iniciar";
button.addEventListener("click", () => {
    animateLine("flow", secondsFlow);
});
main.appendChild(button);
