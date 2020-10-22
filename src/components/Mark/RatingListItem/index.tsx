import React, { useState, useCallback } from 'react'

import './RatingListItem.scss'
import { ColorfulRectangle, TeacherReviewListCommentForm, TeacherReviewList, Accordion, PupilAttachments, PupilAttachmentItem } from '../..'
import { getMarkColor } from '../../../helpers/getMarksColor'
import moment from 'moment';

const RatingInfoItem: React.FC<{ name: string }> = ({name, children}) => {

    return (
        <li className="rating-info-list__item">
            <div className="rating-info-list__property">{name}</div>
            <div className="rating-info-list__value">{children}</div>
        </li>
    )
}

export const RatingListItemDescription: React.FC<{
    response_status: string;
    last_date: Date;
    reamining_time: number;
    last_modified: number;
    attachments: Array<any>;
    attempt: number;
    review: string;
    isOpened: boolean;
}> = ({ response_status, last_date, reamining_time, last_modified, attachments, attempt, review, isOpened }) => {
    
    return (
        <tr className={`rating-table__tr-toggle ${ isOpened ? "opened" : "hidden"}`}>
            <td colSpan="4" className="rating-table__toggle">
                <div>
                    <div className="row rating-table__toggle-container">
                        <div className="col-12 col-lg-6 px-0 mb-3 mb-lg-0">
                            <ul className="rating-info-list">
                                {
                                    !attempt ? "" :
                                    <RatingInfoItem name="Номер попытки">Попытка {attempt}</RatingInfoItem>
                                }
                                {
                                    !response_status ? "" :
                                    <RatingInfoItem name="Состояние ответа">
                                        <span className="text-success">
                                            {response_status}
                                        </span>
                                    </RatingInfoItem>
                                }
                                {
                                    !last_date ? "" :
                                    <RatingInfoItem name="Последний срок сдачи">{moment(last_date).format("DD.MM.YYYY HH:mm")}</RatingInfoItem>
                                }
                                {
                                    !reamining_time ? "" :
                                    <RatingInfoItem name="Оставшееся время">{moment(new Date(reamining_time)).from(new Date())}</RatingInfoItem>
                                }
                                {
                                    !last_modified ? "" :
                                    <RatingInfoItem name="Последние изменения">{moment(last_modified).format("DD.MM.YYYY HH:mm")}</RatingInfoItem>
                                }
                                {
                                    !attachments || attachments.length === 0 ? "" :
                                    <RatingInfoItem name="Вложения">
                                        <div className="rating-doc">
                                            <Accordion.Content>
                                                <Accordion.Item bodyComponent={<PupilAttachmentItem url={attachments[0].file_url} title={attachments[0].filename} icon={`doc-icon--${attachments[0].filename.split(".")[attachments[0].filename.split(".").length - 1]}`} />} icon={<i className="icon-arrow_down" />}>
                                                    <PupilAttachments attachments={attachments}/>
                                                </Accordion.Item>
                                            </Accordion.Content>
                                        </div>
                                    </RatingInfoItem>
                                }
                            </ul>
                        </div>
                        <div className="col-12 col-lg-6">
                            <TeacherReviewList review={review}/>
                        </div>
                    </div>
                </div>
            </td>
        </tr>
    )
}

// <TeacherReviewListCommentForm />

const RatingListItem: React.FC<{
    grades: Array<any>;
    activity_type: string;
    date_time: string;
    response_status: string;
    last_date: Date;
    reamining_time: number;
    last_modified: number;
    attachments: Array<any>;
    attempt: number;
    review: string;
    isOpened: boolean;
}> = ({ grades, activity_type, date_time, ...other}) => {
    const [isOpened, setIsOpened] = useState(false);

    const isOpenedChangeCallback = useCallback(
        (e) => {
            setIsOpened(!isOpened);
        }, [isOpened]
    )

    return (
        <React.Fragment>
            <tr>
                <td className="rating-table__date">{!date_time ? "" : moment(date_time).format("DD.MM.YYYY")}</td>
                <td className="rating-table__activity">{activity_type}</td>
                <td className="rating-table__range">
                    <div className="rating-table__range-wrapper">
                        <div className="rating-table__range-list">
                            {
                                grades.map((el, index) => (
                                    <ColorfulRectangle key={index} className={`${getMarkColor(el)} colorful-rect--lg`}>{el}</ColorfulRectangle>
                                ))
                            }
                        </div>
                    </div>
                    <div onClick={isOpenedChangeCallback} className="rating-table__toggle-wrapper">
                        <span className="rating-table__toggle-link-text">
                            <span className="text-open">Развернуть</span>
                            <span className="text-close d-none">Свернуть</span>
                        </span>
                        <span className="icon-circle-arrow--sm rating-table__toggle-link-icon">
                            <i className="icon-arrow_down"/>
                        </span>
                    </div>
                </td>
            </tr>
            <RatingListItemDescription {...other} isOpened={isOpened}/>
        </React.Fragment>
    )
}

export default RatingListItem