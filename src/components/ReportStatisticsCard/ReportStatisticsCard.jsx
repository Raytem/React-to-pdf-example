import s from './ReportStatisticsCard.module.css'
import classNames from "classnames";

function ReportStatisticsCard({ dataText, dataDescriptionText }) {
    return (
        <div className={s.card}>
            <h3 className={classNames(s.dataText, 'text-xl_semibold')}>{dataText}</h3>
            <p className={classNames(s.dataDescription, 'text-sm_regular')}>{dataDescriptionText}</p>
        </div>
    )
}

export default ReportStatisticsCard;