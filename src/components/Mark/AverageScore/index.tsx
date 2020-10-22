import React from 'react'

import './AverageScore.scss'

const AverageScore: React.FC<{ score: any }> = ({score}) => {

    return (
        <div className="rating__mark">
            <div className="rating__mark-title">Средний балл:</div>
            <span className="rating__mark-value">{score}</span>
        </div>
    )
}

export default AverageScore