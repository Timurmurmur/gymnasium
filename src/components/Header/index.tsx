import React from 'react';
import './Header.scss';
import { Container, Row, Col, TabContainer, Tab, Tabs } from 'react-bootstrap'
import { Logo, PupilList, MenuList, SpecialOffer, HeaderDate, PageTitle, HeaderBanner, NearestEvent, Pupil, MarkList, ScheduleList, TaskList, OverdueList,} from '..'

import avatarBig from '../../assets/img/avatar_big.png'
import PupilNav from "../Pupil/PupilNav"

const Header: React.FC = () => {
    const [isOpened, setIsOpened] = React.useState(false);

    const setOpenedHandler = React.useCallback(
        (e) => {
            if (window.screen.width < 500) {
                if (!isOpened) {
                    document.body.style.overflow = "hidden";
                } else {
                    document.body.style.overflow = "auto";
                }
            }
            setIsOpened(!isOpened);
            
        }, [isOpened]
    )

    return(
        <Col className={`header cabinet-header ${isOpened ? "show" : 'hidden'}`}>
            <Logo setOpenedHandler={setOpenedHandler} opened={isOpened}/>
            <div className={`tab-pane fade active cabinet-header__tab-menu custom-scroll`} id="nav-menu" role="tabpanel" aria-labelledby="nav-menu-tab">
            {
                window.screen.width > 1200 ? 
                <>
                    <PupilList/>
                    <MenuList onClick={setOpenedHandler}/>
                </> :
                    <TabContainer defaultActiveKey={"navigation"}>
                    <PupilNav tabs={
                        [
                            {
                                eventKey: "navigation",
                                label: "Навигация"
                            },
                            {
                                eventKey: "children",
                                label: "Ученик"
                            }
                        ]
                    }>
                    </PupilNav>
                    <Tab.Content className="header-tab">
                        <Tab.Pane eventKey={"navigation"}>
                            <PupilList/>
                            <MenuList onClick={setOpenedHandler}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey={"children"}>
                            <Pupil avatar={avatarBig} title="Михайлов Александр Евгеньевич" type="Ученик" mark="4,56" yearsOld={37} birthDate="17.09.1969" pupilClass="6" email="nomail1@online-gymnasium.ru" city="Москва, Московская область" phone="+7 (933) 933 33-66"/>
                        </Tab.Pane>
                    </Tab.Content>
                </TabContainer>
			}
            
            </div>
        </Col>
    )
}

//<SpecialOffer/>

export default Header;