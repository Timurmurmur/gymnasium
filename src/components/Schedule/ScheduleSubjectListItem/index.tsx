import React from 'react'

import classNames from 'classnames'

import './ScheduleSubjectListItem.scss'

const ScheduleSubjectListItem: React.FC<{
    timeBegin: string;
    timeEnd: any;
    subject: any;
    current: boolean;
    expired: boolean;
}> = ({timeBegin, timeEnd, subject, current=false, expired=false}) => {

    return (
        <li className={classNames('schedule-table__list-item', {'current-subj':current}, {'expired-subj': expired})}>
            <span className="schedule-table__subj-time">{`${timeBegin}-${timeEnd}`}</span>
            <span className="schedule-table__subj-name">{subject}</span>
        </li>
    )
}

export default ScheduleSubjectListItem