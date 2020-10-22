import React from 'react'

import classNames from 'classnames'

import { ScheduleCard } from '../..'

import './ScheduleItem.scss'
import moment from 'moment';


const ScheduleItem: React.FC<{
    time: string;
    subject: string;
    scheduleDate: string;
    description: string;
    current: any;
}> = ({ time, subject, scheduleDate, description, current }) => {
    const isNow = (timestampt: number) => {
        let now = (new Date()).getTime();
        let end = (new Date(time)).getTime() + 45 * 60000;
        if (now > timestampt && now > end) {
            return true;
        } else {
            return false;
        }
    }
    return (
        <div className="dashboard__item dashboard__schedule-item">
            <div className={classNames('card', 'schedule-card', {'schedule-card--current': isNow(time)})}>
                <ScheduleCard className={isNow(time) ? "shape-blue" : "shape-green"}>{isNow(time) ? "Текущий" : "Следующий"}</ScheduleCard>
                <div className="app__card-body d-inline-flex flex-row">
                    <div className="schedule-card__time"><span>{moment(time).format("HH:mm")}</span></div>
                    <div className="pt-3">
                        <h5 className="card-title schedule-card__title">{subject}</h5>
                        <p className="card-text schedule-card__text">{description}</p>
                        <footer className="card-footer">{moment(scheduleDate).format("DD MMMM HH:mm")}</footer>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default ScheduleItem