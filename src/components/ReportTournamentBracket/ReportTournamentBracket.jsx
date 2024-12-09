import s from './ReportTournamentBracket.module.css'
import {getRoundName} from "../../utils/index.js";
import classNames from "classnames";

const ReportTournamentBracket = (
    {
        users = [],
        roundInfo = null, // if null -> table header will not be displayed
        showColoredStates = false,
    }
) => {
    // mock value
    const curUserId = '1';

    const rowsCount = 2;
    const emptyRowFallbackText = 'Участник не определен';
    const emptyScoreFallbackText = '—';
    const eliminatedStateText = 'Выбыл';

    return (
        <table
            className={classNames(
                    s.reportTournamentBracketTable,
                    'text-sm_regular'
                )}
        >
            <thead>
                <tr>
                    {
                        roundInfo && (
                            <th>
                                {getRoundName(roundInfo.roundIndex, roundInfo.lastRoundIndex)}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    (() => {
                        const elements = [];
                        for (let i = 0; i < rowsCount; i++) {

                            if (i > users.length - 1) {
                                elements.push(
                                    <tr>
                                        <td>
                                            <div>{emptyRowFallbackText}</div>
                                            <div>{emptyScoreFallbackText}</div>
                                        </td>
                                    </tr>
                                );
                                continue;
                            }

                            const { id, firstName, lastName, isWinner, score } = users[i];

                            let formattedScore = emptyScoreFallbackText;
                            if (score !== null) {
                                formattedScore = score > 0 ? `+${score}` : score;
                            }

                            let tableRow = null;
                            const isCurrentUserAndWinner = (id === curUserId && isWinner !== null) ? isWinner : null;

                            if (showColoredStates && isCurrentUserAndWinner !== null) {
                                const rowClassName = isWinner ? s.winnerRow : s.eliminatedRow;
                                tableRow = (
                                    <tr key={id} className={rowClassName}>
                                        <td>
                                            <div>{firstName} {lastName}</div>
                                            {!isWinner && (
                                                <div className={classNames(s.eliminatedText)}>{eliminatedStateText}</div>
                                            )}
                                            <div>{formattedScore}</div>
                                        </td>
                                    </tr>
                                );
                            } else {
                                tableRow = (
                                    <tr key={id}>
                                        <td>
                                            <div>{firstName} {lastName}</div>
                                            <div>{formattedScore}</div>
                                        </td>
                                    </tr>
                                );
                            }

                            elements.push(tableRow);
                        }

                        return elements;
                    })()
                }
            </tbody>
        </table>
    )
}

export default ReportTournamentBracket;