import { startArt, roundsNumberArt, fightArt } from "./ascii-arts.js";
import { gameStopHandler, helpHandler, unknownCommandHandler } from "./differentCommandsHandler.js";
import { gameCompletedHandler } from "./gameCompletedHandler.js";
import { alertStartMessage } from "./messages.js";

const generateRandomNumber = () => Math.floor(Math.random() * 3);

const firstLetterToUpperCase = string => string.charAt(0).toUpperCase() + string.slice(1);

window.onload = game();

function computerPlay() {
    const randomNumber = generateRandomNumber();
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    const playerSelectionUpperCase = firstLetterToUpperCase(playerSelection);
    roundFightArt(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        const drawMessage = `It's a draw. Both players choose ${playerSelectionUpperCase}.`;
        console.log(drawMessage);
        return 2; // 2 is the draw slot at score array
    }
    const computerSelectionUpperCase = firstLetterToUpperCase(computerSelection);
    if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'paper' && computerSelection === 'rock')
    || (playerSelection === 'scissors' && computerSelection === 'paper')) {
        const winMessage = `You Win! ${playerSelectionUpperCase} beats ${computerSelectionUpperCase}.`;
        console.log(winMessage);
        return 0; // 0 is the win slot at score array
    }
    const loseMessage = `You Lose! ${computerSelectionUpperCase} beats ${playerSelectionUpperCase}.`;
    console.log(loseMessage);
    return 1; // 1 is the lose slot at score array
}

function game() {
    console.log(startArt);
    const score = [0, 0, 0]; // wins, losses and draws respectively
    for (let index = 0; index < 5; index += 1) {
        console.log(roundsNumberArt[index + 1]);
        const computerSelection = computerPlay();
        const playerSelection = prompt(alertStartMessage);
        if (playerSelection === null) {
            gameStopHandler();
            break;
        } 
        const playerSelectionLowerCase = playerSelection.toLowerCase();
        if (playerSelectionLowerCase === 'rock'
            || playerSelectionLowerCase === 'paper'
            || playerSelectionLowerCase === 'scissors') {
            const roundResult = playRound(playerSelectionLowerCase, computerSelection);
            score[roundResult] += 1;
        } else if (playerSelectionLowerCase === 'help') {
            index -= 1;
            helpHandler();
        } else {
            index -= 1;
            unknownCommandHandler();
        }
        if (index === 4) {
            gameCompletedHandler(score);
        }
    }
}

function roundFightArt(playerSelection, computerSelection) {
    let newString = ' ';
    for (let index = 1; index <= 18; index += 1) {
        newString += fightArt[playerSelection][index];
        newString += fightArt.xArt[index];
        newString += fightArt[computerSelection][index];
        newString += '\n';
    }
    
    console.log(newString)
}


