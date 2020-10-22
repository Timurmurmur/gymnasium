import React from 'react'

import { ScheduleItem, TitleLink } from '../..'

import './ScheduleList.scss'
import { connect } from 'react-redux'
import { loadShortShedule } from '../../../redux/actions/shedule'
import Skeleton from 'react-loading-skeleton'
import { PageStatus } from '../../../common/types'
import { State } from '../../../redux/store'
//|| schedule !== null
//<TitleLink url="/dashboard/schedule" title="Подробнее"/>
const ScheduleList: React.FC<{
    pageStatus: PageStatus;
    loadShortSchedule: () => void;
    schedule: Array<any>;
    error: any;
    profilePageStatus: PageStatus;
}> = ({ pageStatus, loadShortSchedule,schedule, error, profilePageStatus }) => {

    React.useEffect(() => {
        if (profilePageStatus === PageStatus.LOADING) {
            loadShortSchedule();
        }
    }, [profilePageStatus])

    if (pageStatus === PageStatus.LOADED || schedule !== null) {
        return (
            <div className="dashboard__schedule">
                <h5 className="mb-4">Расписание</h5>
                <div className="dashboard__schedule-wrapper">
                    {
                        schedule?.length === 0 ? 
                        <h6>
                            Нет расписания
                        </h6>
                        :
                        <>
                            {
                                schedule.map((el, index) => (
                                    <ScheduleItem key={index} time={el.timestart} subject={el.class} scheduleDate={el.timestart} description={el.class_topic} />
                                ))
                            }  
                        </>
                    } 
                      
                </div>
            </div>
        )
    } else {
        return (
            <div className="dashboard__schedule dashboard__schedule--loading">
                <h5 className="mb-4">Расписание </h5>
                <div className="dashboard__schedule-wrapper">
                    <div className="dashboard__item dashboard__schedule-item">
                      <div className="card schedule-card schedule-card--pl card-pl">
                        <div className="app__card-body d-inline-flex flex-row">
                          <div className="schedule-card__time card-pl__square"></div>
                          <div className="schedule-card__content">
                            <div className="card-title schedule-card__title card-pl__title"></div>
                            <p className="card-text schedule-card__text card-pl__text"></p>
                            <footer className=" card-pl__footer card-footer schedule-card__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item dashboard__schedule-item">
                      <div className="card schedule-card schedule-card--pl card-pl">
                        <div className="app__card-body d-inline-flex flex-row">
                          <div className="schedule-card__time card-pl__square"></div>
                          <div className="schedule-card__content">
                            <div className="card-title schedule-card__title card-pl__title"></div>
                            <p className="card-text schedule-card__text card-pl__text"></p>
                            <footer className=" card-pl__footer card-footer schedule-card__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    ({ shortSchedule, profile }: State) => ({ ...shortSchedule, profilePageStatus: profile.pageStatus }),
    (dispatch) => {
        return {
            loadShortSchedule: () => {
                return dispatch(loadShortShedule())
            }
        }
    }
)(ScheduleList)