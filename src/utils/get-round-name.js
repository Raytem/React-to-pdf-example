export const getRoundName = (roundIndex, lastRoundIndex, withWinnerRound = false, withGroupRound = false) => {
    const diff = lastRoundIndex - roundIndex

    let roundName = '';

    const groupRoundName = 'Группы'
    const winnerRoundName = 'Победитель';
    const finalsRoundName = 'Финал';

    if (withGroupRound) {
        if (roundIndex === 0) {
            return groupRoundName
        }
        roundIndex++;
        lastRoundIndex++;
    }

    switch (diff) {
        case 0:
            roundName = withWinnerRound ? winnerRoundName : finalsRoundName;
            break;
        case 1:
            if (withWinnerRound) {
                roundName = finalsRoundName;
                break
            }
        default:
            const secondNum = Math.pow(2, diff);
            roundName = `1/${secondNum}`;
            break;
    }

    return roundName;
}