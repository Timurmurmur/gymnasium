import React from 'react'

import './OverdueItem.scss'
import moment from 'moment';

const OverdueItem: React.FC<{
    activity_type: string;
    class: string;
    class_topic: string;
    timestart: number;
    priority: string;
}> = ({ activity_type, class: classLearn, class_topic, timestart, priority }) => {

    return (
        <div className="dashboard__item">
            <div className="card overdue-card">
                <div className="app__card-body">
                    <h5 className="card-title">{activity_type}</h5>
                    <p className="card-text card-text--line-bottom">{classLearn}</p>
                    <p className="card-extra-text">{class_topic}</p>
                    <footer className="card-footer text-right">{moment(timestart).format("DD MMMM YYYY")}</footer>
                </div>
            </div>
        </div>
    )
}

export default OverdueItem