import React from 'react'

import './TaskItem.scss'
import moment from 'moment';

const TaskItem: React.FC<{
    class: string;
    class_topic: string;
    timestart: number;
}> = ({ class: classLearn, class_topic, timestart }) => {

    return (
        <div className="dashboard__item dashboard__task-item">
            <div className="card task-card">
                <div className="app__card-body task-card__body">
                <h5 className="card-title ">{classLearn}</h5>
                <p className="card-text">{class_topic}</p>
                <div className="task-card__inner">
                    <div>
                    </div>
                    <footer className="card-footer task-card__date">Срок сдачи - {moment(timestart).format("DD MMMM YYYY")}</footer>
                </div>
                </div>
            </div>
        </div> 
    )
}

//<a href="#" className="btn btn-primary btn-sm task-card__btn disabled">Перейти</a>

export default TaskItem
