import Report from "./components/Report/Report.jsx";

function App() {

    const individualReportData = {
        reportCreatedAt: new Date(),
        gamesPlayed: 7,
        gamesTotal: 7,
        player: {
            id: '1',
            firstName: "Виктор",
            lastName: "Рындин",
        },
        gamesInfo: {
            lastRoundIndex: 3,
            games: [
                {
                    id: '2342',
                    roundIndex: 0,
                    participants: [
                        {
                            id: '1',
                            isWinner: true,
                            firstName: 'Виктор',
                            lastName: 'Рындин',
                            score: 20,
                        },
                        {
                            id: '2',
                            isWinner: true,
                            firstName: 'Алина',
                            lastName: 'Шапошникова',
                            score: -5,
                        }
                    ]
                },
                {
                    id: '2346',
                    roundIndex: 1,
                    participants: [
                        {
                            id: '1',
                            isWinner: true,
                            firstName: 'Виктор',
                            lastName: 'Рындин',
                            score: 18,
                        },
                        {
                            id: '3',
                            isWinner: false,
                            firstName: 'Андрей',
                            lastName: 'Ламар',
                            score: 12,
                        }
                    ]
                },
                {
                    id: '23',
                    roundIndex: 2,
                    participants: [
                        {
                            id: '1',
                            isWinner: true,
                            firstName: 'Виктор',
                            lastName: 'Рындин',
                            score: 19,
                        },
                        {
                            id: '3',
                            isWinner: false,
                            firstName: 'Андрей',
                            lastName: 'Ламар',
                            score: 18,
                        }
                    ]
                },
                {
                    id: '444',
                    roundIndex: 3,
                    participants: [
                        {
                            id: '1',
                            isWinner: false,
                            firstName: 'Виктор',
                            lastName: 'Рындин',
                            score: 12,
                        },
                        {
                            id: '3',
                            isWinner: true,
                            firstName: 'Александр',
                            lastName: 'Жабраилов',
                            score: 18,
                        }
                    ]
                }
            ]
        }
    }

  return (
    <div className={'base-wrapper'}>
        <Report data={individualReportData} />
    </div>
  )
}

export default App
