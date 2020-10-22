import React, { useEffect, useState } from 'react'
import { getDate } from '../../../helpers/getMonth';
import moment from 'moment'
import './HeaderDate.scss'

const HeaderDate: React.FC = () => {
    let interval;
    const [date, setDate] = useState(new Date());
    
    const Time = React.useMemo(
        () => (
                <span className="header-date__time">
                    { moment(date).format('HH:mm') }
                </span>
        ), [date.getMinutes(), date.getHours()]
    )

    const MemoDate = React.useMemo(
        () => (
            <span className="header-date__date">
                {`${date.getDate()} ${getDate(date.getUTCMonth())} ${date.getUTCFullYear()}`}
            </span>
        ), [date.getDate(), date.getUTCMonth(), date.getUTCFullYear()]
    )
    const tick = () => {
        setDate(new Date());
    }
    
    useEffect(() => {
        interval = setInterval(() => {
            tick()
        }, 1000)
    }, [])
    
    return (
        <div className="header-date">
            <span className="header-date__title">Сегодня </span>
            {
                MemoDate
            }
            {
                Time
            }
        </div>
    )
}

export default HeaderDate