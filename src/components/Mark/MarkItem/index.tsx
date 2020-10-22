import React from 'react'

import { ColorfulCircle } from '../..'

import './MarkItem.scss'

const MarkItem: React.FC<{
    mark: string;
    subject: string;
    goal: string;
    markDate: string;
    className: string;
}> = ({ mark, subject, goal, markDate, className }) => {

    return (
        <div className="dashboard__item">
            <div className="card grade-card">
                <div className="card-body d-inline-flex flex-row">
                    <div className="grade-card__grade">
                        <ColorfulCircle className={className}>{mark}</ColorfulCircle>
                    </div>
                    <div className="d-flex flex-column justify-content-between">
                        <div>
                            <h5 className="card-title grade-card__title">{subject}</h5>
                            <p className="card-text grade-card__text">{goal}</p>
                        </div>
                        <footer className="card-footer">{markDate}</footer>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default MarkItem