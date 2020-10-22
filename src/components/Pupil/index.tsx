import React from 'react'

import { ColorfulRectangle, PupilAttachments } from '..'
import './Pupil.scss'
import { Tab } from 'react-bootstrap'
import { connect } from 'react-redux'
import moment from 'moment';
import avatar from '../../assets/img/load-photo-profile.svg'
import { PageStatus } from '../../common/types'
import { State } from '../../redux/store'

const Pupil: React.FC<{
    title: string;
    type: string;
    mark: string;
    yearsOld: number;
    birthDate: string;
    pupilClass: string;
    email: string;
    city: string;
    phone: string;
    pageStatus: PageStatus;
    profile: any;
    error: any;
}> = ({ title, type, mark, yearsOld, birthDate, pupilClass, email, city, phone, pageStatus, profile, error }) => {
    
    
    if (pageStatus === PageStatus.LOADED || pageStatus === PageStatus.ERROR && profile !== null || pageStatus === PageStatus.LOADING && profile !== null) {
        return (
            <div className="cabinet-header__tab-pupil-fixed custom-scroll" id="nav-pupil" role="tabpanel" aria-labelledby="nav-pupil-tab">
                <div className="cabinet-header__tab-pupil-wrapper">
                    <div className="cabinet-header__pupil mb-4">
                        <img className="cabinet-header__pupil-photo" src={!profile?.photo ? avatar : profile.photo} alt="Ученик" />
                        <div className="h5 mb-3">{`${profile.last_name} ${profile.first_name} ${profile.patronymic}`}</div>
                        <ul className="cabinet-header__pupil-options-list">
                            {
                                !profile?.role ?
                                ""
                                :
                                <li className="cabinet-header__pupil-options-list-item">
                                    <ColorfulRectangle className="shape-purple">{profile.role}</ColorfulRectangle>
                                </li>
                            }
                            {
                                !profile?.point ?
                                ""
                                :
                                <li className="cabinet-header__pupil-options-list-item">
                                    <ColorfulRectangle className="shape-orange">Средний балл {profile.point}</ColorfulRectangle>
                                </li>
                            }
                        </ul>
                    </div>
                    <div className="mb-5">
                        <h5 className="mb-3">Общая информация</h5>
                        <ul className="info-list list-unstyled">
                            {
                                !profile?.years_old?.birthday || !profile?.years_old?.age ?
                                null
                                :
                                <li className="info-list__item">
                                    <span className="info-list__name">Возраст:</span>
                                    <span className="info-list__value">
                                        <strong className="text-primary">{profile.years_old.age} лет</strong> | {moment(profile.years_old.birthday).format("DD.MM.YYYY")}
                                    </span>
                                </li>
                            }
                            {
                                !profile?.grade ?
                                null
                                :
                                <li className="info-list__item">
                                    <span className="info-list__name">Класс:</span>
                                    <span className="info-list__value text-primary">{profile.grade} класс</span>
                                </li>
                            }
                            {
                                !profile?.email ?
                                null
                                :
                                <li className="info-list__item">
                                    <span className="info-list__name">Email</span>
                                    <span className="info-list__value">{profile.email}</span>
                                </li>
                            }
                            {
                                !profile?.place?.city && !profile?.place?.state ?
                                null
                                :
                                <li className="info-list__item">
                                    <span className="info-list__name">Город</span>
                                    <span className="info-list__value">{`${!profile?.place?.city ? "" : profile.place.city} ${!profile?.place?.state ? "" : profile.place.city.state}`} </span>
                                </li>
                            }
                            {
                                !profile.phone_number ? null :
                                <li className="info-list__item">
                                    <span className="info-list__name">Телефон</span>
                                    <span className="info-list__value">{profile.phone_number}</span>
                                </li>
                            }
                        </ul>
                    </div>
                    {
                        !profile?.documents || profile?.documents.length === 0 ? null :
                        <PupilAttachments attachments={profile.documents}>
                            <h5 className="mb-3">Последние вложения</h5>
                        </PupilAttachments>
                    }
                </div>
            </div>
        )
    } else if (pageStatus === PageStatus.LOADING) {
        return "LOADING"
    } else {
        return "ERROR"
    }
}

export default connect(
    ({ selectedProfile }: State) => ({ ...selectedProfile }),
    (dispatch) => ({}) 
)(Pupil)
