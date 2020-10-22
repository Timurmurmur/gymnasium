import React from 'react'

import './TeacherReviewListCommentForm.scss'

const TeacherReviewListCommentForm: React.FC = () => {

    return (
        
        <React.Fragment>
            <h6 className="rating-table__commit-title">Комментарий к ответу</h6>
            <form className="rating-table__form" action="/">
                <div className="form-group m-0">
                    <textarea className="form-control" name="range-commit" placeholder="Комментарий"/>
                </div>
                <button className="btn btn-sm btn-primary">Отправить</button>
            </form>
        </React.Fragment>
    )
}

export default TeacherReviewListCommentForm