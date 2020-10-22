import React from 'react'

import { ScheduleDaysListItem } from '../..'

import './ScheduleDaysList.scss'

const ScheduleDaysList: React.FC<{
    schedule: Array<any>;
}> = ({ schedule }) => {

    return (
        <div className="schedule__table__wrapper custom-scroll" data-set-scroll-height="true" data-scroll="x">
            <ul className="schedule__table-list">
                {
                    schedule.map((el, index) => {
                        return (
                            <ScheduleDaysListItem key={index} classes={el.classes} day={el.date} weekDay={el.day_of_the_week} currentDay={(new Date(el.date).toDateString()) === (new Date()).toDateString()}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ScheduleDaysList