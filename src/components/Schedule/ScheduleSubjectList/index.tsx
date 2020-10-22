import React from 'react'

import { ScheduleSubjectListItem } from '../..'
import moment from 'moment';

const ScheduleSubjectList: React.FC<{
    classes: Array<any>
}> = ({ classes }) => {
    const isLessonNow = (start_time: string, end_time: string) => (new Date(end_time)) > (new Date()) && (new Date(start_time)) < (new Date());
    return (
        <ul className="schedule-table__list">
            {
                classes.map((el, index) => {
                    return (
                        <ScheduleSubjectListItem expired={(new Date() > new Date(el.end_time))} key={index} timeBegin={moment(el.start_time).format("HH:mm")} current={isLessonNow(el.start_time, el.end_time)} timeEnd={moment(el.end_time).format("HH:mm")} subject={el.name} />
                    )
                })
            }
        </ul>
    )
}

export default ScheduleSubjectList