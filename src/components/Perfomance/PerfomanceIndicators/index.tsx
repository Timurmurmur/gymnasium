import React from 'react'

import './PerfomanceIndicators.scss'

const PerfomanceIndicators: React.FC = () => {

    return (
        <div className="performance__indicators">
            <span className="text-danger mr-2"><i className="icon-arrow_big_down"/> Уменьшение балла</span>
            <span className="text-success"><i className="icon-arrow_big_up"/> Повышение балла</span>
        </div>
    )
}

export default PerfomanceIndicators
