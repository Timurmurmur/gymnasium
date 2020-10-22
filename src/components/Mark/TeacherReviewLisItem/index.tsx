import React from 'react'

import './TeacherReviewLisItem.scss'

const TeacherReviewLisItem: React.FC<{ review: string }> = ({ review }) => {

    return (
        <p dangerouslySetInnerHTML={{ __html: review }}></p>
    )
}

export default TeacherReviewLisItem