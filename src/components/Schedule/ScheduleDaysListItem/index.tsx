import React from 'react'

import classNames from 'classnames'

import { ScheduleSubjectList } from '../..'

import './ScheduleDaysListItem.scss'
import { getDate } from '../../../helpers/getMonth'
import moment from 'moment';

const ScheduleDaysListItem: React.FC <{
    day: string;
    weekDay: string;
    currentDay: boolean;
    classes: any;
}> = ({ day, weekDay, currentDay=false, classes }) => {

    return (
        <li className="schedule__table-list-item">
            <div className={classNames('schedule-table', {'current-day': currentDay}, {'expired-day': (new Date()) > (new Date(day))})}>
                <header className="schedule-table__header">
                    <small className="schedule-table__header-date">{
                        moment(day).format("DD") + " " + getDate((new Date(day).getMonth()))
                    }</small>
                    <div className="schedule-table__header-title">{weekDay}</div>
                </header>

                <ScheduleSubjectList classes={classes}/>
            </div>
        </li>
    )
}

export default ScheduleDaysListItem