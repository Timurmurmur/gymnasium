import React from 'react'
import classNames from 'classnames'
import { PupilListItemInfo } from '../..'

import './PupilListItem.scss'

const PupilListItem: React.FC<{
    title: string;
    pupilClass: any;
    pupilMark: any;
    selected: any;
    onSelect: (e: any) => void;
}> = ({ title, pupilClass, pupilMark, selected, onSelect, avatar }) => {

    return (
        <div className={classNames('media', 'user-card', { 'align-items-center':!selected }, { 'user-card--selected':selected }, { 'cabinet-header__user-selected':selected })}>
            <img className="user-card__photo align-self-center" src={avatar} alt="avatar" />
            <div className="media-body cabinet-header__media-body">
                <h5 className="user-card__title mt-0">{title}</h5>
                {selected && <PupilListItemInfo pupilClass={pupilClass} pupilMark={pupilMark} />}
            </div>
            {!selected && <small onClick={onSelect} className="user-card__select">Выбрать</small>}
        </div>
    )
}

export default PupilListItem