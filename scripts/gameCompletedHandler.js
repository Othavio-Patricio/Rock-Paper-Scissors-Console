import { resultsArt } from "./ascii-arts.js";
import { getLocalStorage, updateLocalStorage } from "./localStorageHandler.js";


function gameCompletedHandler(score) {
    const { victory, defeat, draw } = resultsArt;
    if (score[0] > score[1]) {
        updateLocalStorage(0);
        console.log(victory);
    } else if (score[0] < score[1]) {
        updateLocalStorage(1);
        console.log(defeat);
    }
    else {
        updateLocalStorage(2);
        console.log(draw);
    }
    const totalScore = getLocalStorage();
    const totalScoreSplited = totalScore.split(',');
    console.log(`Final Score: ${score[0]} wins, ${score[1]} losses and ${score[2]} draws`);
    console.log(`
╔═════════════════════════════════╗
       YOUR TOTAL SCORE IS:
  ${totalScoreSplited[0]} VICTORIES
  ${totalScoreSplited[1]} DEFEATS
  ${totalScoreSplited[2]} DRAWS
╚═════════════════════════════════╝`)
    console.log(`
┍━━━━━━━━━━━━━━━━━━━━━━━━━☟━━━━━━━━━━━━━━━━━━━━━━━━━┑
        You can reload the page to Play Again  
┕━━━━━━━━━━━━━━━━━━━━━━━━━☝︎━━━━━━━━━━━━━━━━━━━━━━━━━┙`);
}

export { gameCompletedHandler };
