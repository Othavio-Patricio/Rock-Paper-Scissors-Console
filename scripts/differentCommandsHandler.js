import { gameStopMessage, helpMessage, uknownCommandMessage } from "./messages.js";

function gameStopHandler() {
    console.log(gameStopMessage);
}

function helpHandler() {
    console.log(helpMessage);
}

function unknownCommandHandler() {
    console.log(uknownCommandMessage);
}

export {
    gameStopHandler,
    helpHandler,
    unknownCommandHandler
};
