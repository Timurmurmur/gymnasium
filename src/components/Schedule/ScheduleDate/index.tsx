import React from 'react'

import './ScheduleDate.scss'
import moment from 'moment';
import { getDate } from '../../../helpers/getMonth';

const ScheduleDate: React.FC<{
    date: string;
    onChange: (e: any, value: boolean) => void;
}> = ({date, onChange}) => {
    return (
        <div className="schedule__date">
            <a onClick={e => onChange(e, true)} href="#" className="icon-circle-arrow"><i className="icon-arrow_left"/></a>
            <div className="schedule__date-days">{`${moment(date).day(1).date()}-${moment(date).day(7).date()}`}</div>
            <span className="schedule__date-month">{getDate(moment(date).month())}</span>
            <a onClick={e => onChange(e, false)} href="#" className="icon-circle-arrow"><i className="icon-arrow_right"/></a>
        </div>
    )
}
//{getDate(month.getMonth())}
export default ScheduleDate