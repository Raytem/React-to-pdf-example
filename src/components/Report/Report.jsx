import { useRef } from "react";
import s from './Report.module.css'
import ReportStatisticsCard from "../ReportStatisticsCard/ReportStatisticsCard.jsx";
import Button from "../Button/Button.jsx";
import { downloadPdfFromHtml } from "../../utils";
import ReportTournamentBracket from "../ReportTournamentBracket/ReportTournamentBracket.jsx";

const Report = ({ data }) => {
    const contentRef = useRef(null);

    const formatDate = (date, delimiter = '.') => {
            return `${data.reportCreatedAt.getDate().toString().padStart(2, '0')}${delimiter}${(data.reportCreatedAt.getMonth()+1).toString().padStart(2, '0')}${delimiter}${data.reportCreatedAt.getFullYear()}`;
    }

    const handleDownloadPdf = async () => {
        const fileName = `Индивидуальный_отчет_${data.player.firstName}_${data.player.lastName}_${formatDate(data.reportCreatedAt, '-')}`

        await downloadPdfFromHtml({
            fileName,
            domNode: contentRef.current,
            documentWidth: 1609,
        })
    }

    return (
        <main className={s.report_layout} ref={contentRef}>
            <section className={s.report_section}>
                <div className={s.report_statistics_header}>
                    <h1 className={'text-2xl_heading'}>Статистика</h1>
                    <Button
                        size={'m'}
                        text='Скачать отчет'
                        onClick={handleDownloadPdf}
                        data-html2canvas-ignore // этот атрибут позволяет скрыть элемент при конвертации в PDF
                    />
                </div>

                <div
                    className={s.report_statistics_reportTypeSelector_block}
                    data-html2canvas-ignore
                >
                    <Button
                        text={'Групповой этап'}
                        size={'s'}
                        type={'secondary'}
                    />
                    <Button
                        text={'Плей-офф'}
                        size={'s'}
                        type={'secondary'}
                    />
                </div>

                <div>
                    <div className={s.baseInfo_block}>
                        <ReportStatisticsCard
                            dataText={`${data.player.firstName} ${data.player.lastName}`}
                            dataDescriptionText={'Участник'}
                        />
                        <ReportStatisticsCard
                            dataText={`${data.gamesPlayed}/${data.gamesTotal}`}
                            dataDescriptionText={'Игр сыграно'}
                        />
                        <ReportStatisticsCard
                            dataText={formatDate(data.reportCreatedAt)}
                            dataDescriptionText={'Дата отчета'}
                        />
                    </div>
                </div>
            </section>

            <section className={s.report_section}>
                <h1 className={'text-2xl_heading'}>Турнирная таблица</h1>
                <div className={s.tournamentTableGrid}>
                    {
                        data.gamesInfo.games.map((g) => (
                            <ReportTournamentBracket
                                key={g.id}
                                users={g.participants}
                                roundInfo={{
                                    roundIndex: g.roundIndex,
                                    lastRoundIndex: data.gamesInfo.lastRoundIndex,
                                }}
                                showColoredStates={true}
                            />
                        ))
                    }
                </div>
            </section>

            <section className={s.report_section}>
                <h1 className={'text-2xl_heading'}>Какой-то текст</h1>
                <p className={'text-base_regular'}>
                    sdklfj klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj klsdjfklj skldjf klsdjf lsdjkl fjsdklf
                    jlssdklfj
                    klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj
                    klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj
                    klsdjfklj skldjf klsdjf lsdjkl fjsdklf jlssdklfj klsdjfklj skldjf klsdjf lsdjkl fjsdklf jls
                </p>
            </section>

        </main>
    );
};

export default Report;
