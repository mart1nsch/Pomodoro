let messageID = 0;

function messageControl(type, message){
    if (type === "confirmation") {
        const existentMessage = document.querySelector(`#message${messageID}`);

        if (!existentMessage) {
            createConfirmationMessage();
        }
    } else if (type === "alert") {

    } else if (type === "error") {

    }

    function createConfirmationMessage(){
        const mainElement = document.querySelector("main");

        const divMessageElement = document.createElement("div");
        divMessageElement.setAttribute("class", "container-message");
        divMessageElement.setAttribute("id", `message${++messageID}`);
        divMessageElement.style.opacity = 1;
        mainElement.appendChild(divMessageElement);

        const spanMessageElement = document.createElement("span");
        spanMessageElement.innerText = message;
        divMessageElement.appendChild(spanMessageElement);

        setTimeout(function(){
            divMessageElement.style.animation = "messageExit 300ms ease-in-out";
        }, 3700);

        setTimeout(function(){
            removeMessage(messageID);
        }, 4000);
    }

    function removeMessage(messageID){
        const messageElement = document.querySelector(`#message${messageID}`);
        if (messageElement) {
            messageElement.remove();
        }
    }
}
