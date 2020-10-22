import React from 'react'

import './NearestEvent.scss'
import Axios from 'axios'
import { connect } from 'react-redux'
import { loadNear } from '../../../redux/actions/near'
import moment from 'moment'
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from '../../../common/types'
import { State } from '../../../redux/store'

const NearestEvent: React.FC<{
    pageStatus: PageStatus;
    error: any;
    event: any;
    loadNearest: (pageStatus: PageStatus) => void;
    profilePageStatus: PageStatus;
}> = ({ pageStatus, event, error, loadNearest, profilePageStatus }) => {
    React.useEffect(() => {
        if (profilePageStatus === PageStatus.LOADED) {
            loadNearest(pageStatus);
        }
    }, [profilePageStatus])
    
    if (pageStatus === PageStatus.LOADED) {
        if (event.length === 0) {
            return <div className="event">
            <div className="event__title">Ближайщее событие:</div>
                <span className="event__body">
                    <strong>Нет ближайших событий</strong>
                </span>
            </div>
        } else {
            return (
                <div className="event">
                    <div className="event__title">Ближайщее событие:</div>
                    <span className="event__body">
                        Урок <strong>Английского языка</strong>
                        <small className="event__time">{!event?.date_time ? moment(new Date()).format("DD.MM HH:mm") : moment(event?.date_time).format("DD.MM HH:mm")}</small>
                    </span>
                </div>
            )
        }
    } else {
        return(
            <div className="event event__loading">
                <div className="event__title">
                    <Skeleton />
                </div>
                <span className="event__body">
                    <Skeleton /> <strong><Skeleton /></strong>
                    <small className="event__time">
                        <Skeleton />
                    </small>
                </span>
            </div>
        )
    }
}

export default connect(
    ({ near, profile }: State) => ({ ...near, profilePageStatus: profile.pageStatus }),
    (dispatch) => {
        return {
            loadNearest: (pageStatus: PageStatus) => {
                return dispatch(loadNear(pageStatus))
            }
        }
    }
)(NearestEvent)