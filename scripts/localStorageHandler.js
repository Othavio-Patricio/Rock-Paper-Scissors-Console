const getLocalStorage = () => localStorage.getItem('RPSScore');

function checkLocalStorage() {
    const totalScore = getLocalStorage();
    if (!totalScore) {
        localStorage.setItem('RPSScore', [0, 0, 0]);
        return '0,0,0';
    }
    const splitedScore = totalScore.split(',');
    const winsToInt = parseInt(splitedScore[0]);
    const losesToInt = parseInt(splitedScore[1]);
    const drawToInt = parseInt(splitedScore[2]);
    if (splitedScore.length !== 3
        || winsToInt === 'NaN'
        || losesToInt === 'NaN'
        || drawToInt === 'NaN') {
            localStorage.setItem('RPSScore', [0, 0, 0]);
            return '0,0,0'
        }
    return totalScore;
}

function updateLocalStorage(result = 2) {
    const totalScore = checkLocalStorage();
    const splitedScore = totalScore.split(',');
    const winsToInt = parseInt(splitedScore[0]);
    const losesToInt = parseInt(splitedScore[1]);
    const drawToInt = parseInt(splitedScore[2]);
    switch (result) {
        case 0:
            splitedScore[0] = winsToInt + 1;
            break;
        case 1:
            splitedScore[1] = losesToInt + 1;
            break;
        case 2:
            splitedScore[2] = drawToInt + 1;
            break;
    }
    localStorage.setItem('RPSScore', splitedScore);
}

export {
    getLocalStorage,
    checkLocalStorage,
    updateLocalStorage
};
