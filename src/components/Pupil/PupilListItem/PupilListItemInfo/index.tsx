import React from 'react'

import './PupilListItemInfo.scss'

const PupilListItemInfo: React.FC<{
    pupilClass: string;
    pupilMark: string;
}> = ({ pupilClass, pupilMark }) => {

    return (
        <div className="user-card__add-info">
            {
                pupilClass && <><span className="user-card__grade"><strong className="text-primary">{pupilClass}</strong> класс</span>&nbsp;|&nbsp;</>
            }
            {
                pupilMark && <span className="user-card__rating"><i className="icon-star"></i> {pupilMark}</span>
            }
        </div>
    )
}

export default PupilListItemInfo