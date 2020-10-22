import React from 'react'

import {TeacherReviewLisItem} from '../..'

import './TeacherReviewList.scss'

const TeacherReviewList: React.FC<{ review: any }> = ({ review }) => {

    return (
        
        <div className="rating-table__commit">
            <h6 className="rating-table__commit-title">Примечание</h6>
            {
                !review ?
                <p>Примечание отсутствует</p>
                :
                <TeacherReviewLisItem review={review} />
            }
        </div>
    )
}

export default TeacherReviewList
