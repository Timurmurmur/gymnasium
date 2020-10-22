import React from 'react'

import { Accordion, Card } from 'react-bootstrap'

import { PupilListItem, CircleArrow } from '../..'

import { connect } from 'react-redux'
import { loadProfile, selectProfile, loadSelectedProfile } from '../../../redux/actions/profile';

import './PupilList.scss'

import avatar from '../../../assets/img/load-photo-profile.svg';
import { PageStatus } from '../../../common/types';
import { State } from '../../../redux/store';


const PupilList: React.FC<{
    pageStatus: PageStatus;
    user: Array<any>;
    error: any;
    loadProfile: (pageStatus: PageStatus) => void;
    selectedProfile: any;
    selectedProfilePageStatus: PageStatus;
    loadSelectedProfile: (pageStatus: PageStatus, profile: any) => void;
}> = ({ pageStatus, user, error, loadProfile, selectedProfile, selectedProfilePageStatus, loadSelectedProfile }) => {
    React.useEffect(
        () => {
            loadProfile(pageStatus);
        },[]
    )
    const profileSelectHandler = (profile: any) => {
        selectProfile(profile);
        loadSelectedProfile(selectedProfilePageStatus, profile)
    }
    return (
        <Accordion className="cabinet-header__user-container">
            <Card>
                <Card.Header className="cabinet-header__user">
                    {
                        pageStatus === "LOADED" &&
                        <>
                        {
                            user.length <= 1 ? "":
                            <div className="cabinet-header__user-opener">
                                <CircleArrow eventKey="0" />
                            </div>
                        }
                        </>
                    }
                    {
                        pageStatus === PageStatus.LOADED ?
                        <PupilListItem avatar={!selectedProfile.photo ? avatar : selectedProfile.photo} title={`${selectedProfile.last_name} ${selectedProfile.first_name} ${selectedProfile.patronymic}`} pupilClass={selectedProfile?.grade} pupilMark={selectedProfile?.point} selected={true} />
                        :
                        <PupilListItem avatar={avatar} title="Иванов Иван Иванович" pupilClass="6" pupilMark="4,56" selected={true} />
                    }
                </Card.Header>
                {
                    pageStatus === "LOADED" && 
                    <>
                    {
                        user.length <= 1 ? "" :
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <ul className="cabinet-header__user-list list-unstyled">
                                    {user.filter(el => el.id !== selectedProfile.id).map((el,index) => (
                                        <li key={el.id} className="cabinet-header__user-list-item">
                                            <a href="#" className="text-decoration-none">
                                                <PupilListItem onSelect={e => profileSelectHandler(el)} avatar={!el.photo ? avatar : el.photo} title={`${el.last_name} ${el.first_name} ${el.patronymic}`} selected={false} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    }
                    </>
                }
            </Card>
        </Accordion>
    )
}

export default connect(
    ({ profile, selectedProfile }: State) => ({ ...profile, selectedProfilePageStatus: selectedProfile.pageStatus }),
    (dispatch) => {
        return {
            loadProfile: (pageStatus: PageStatus) => {
                return dispatch(loadProfile(pageStatus))
            },
            selectProfile: (profile: any) => {
                return dispatch(selectProfile(profile))
            },
            loadSelectedProfile: (pageStatus: PageStatus, profile: any) => {
                return dispatch(loadSelectedProfile(pageStatus, profile))
            }
        }
    }
)(PupilList)