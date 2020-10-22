import React, { useEffect } from "react"
import './Home.scss';
import { Container, Row, Col, TabContainer, Tab, Tabs } from 'react-bootstrap'

import { Logo, PupilList, MenuList, SpecialOffer, HeaderDate, PageTitle, HeaderBanner, NearestEvent, Pupil, MarkList, ScheduleList, TaskList, OverdueList } from '../../components'

import avatarBig from '../../assets/img/avatar_big.png'
import PupilNav from "../../components/Pupil/PupilNav"
import { connect } from "react-redux";
import { loadTasks } from "../../redux/actions/tasks";
import { loadLastMarks } from "../../redux/actions/marks";
import { PageStatus } from "../../common/types";
import { State } from "../../redux/store";
//expiredTasks, currentTasks, lastMarks, shortSchedule
//<NearestEvent />

const Home: React.FC<{
	loadTasks: () => void;
	pageStatus: PageStatus;
	loadLastMarks: () => void;
	selectedProfile: any;
	expiredTasks: Array<any>;
	currentTasks: Array<any>;
	lastMarks: Array<any>
	shortSchedule: any;
}> = ({ loadTasks, pageStatus, loadLastMarks, selectedProfile, expiredTasks, currentTasks, lastMarks, shortSchedule }) => {
	useEffect(
		() => {
			if (pageStatus === PageStatus.LOADED) {
				loadTasks();
				loadLastMarks();
			}
		}, [pageStatus, selectedProfile?.id]
	)

	return (
		<>
			<Col className='px-0 position-relative'>
				<div className="cabinet-content custom-scroll">
					<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
						<Row>
							<PageTitle title="Домашняя страница"/>
							<Col>
								<HeaderBanner title={`Добро пожаловать!`} text=""/>
							</Col>
						</Row>
						<Row className="dashboard">
							{
								currentTasks?.length === 0 && lastMarks?.length === 0 && expiredTasks?.length === 0 && shortSchedule?.length === 0 ?
								<div className="home-empty-data">
									<img className="home-empty-data__img" src={require('../../assets/img/book.svg')} alt="books" />
									<h2>Ждем оценки и расписание</h2>
								</div>
								:
								<>
								<MarkList />
								<ScheduleList />
								<TaskList />
								</>
							}
						</Row>
					</div>
				</div>
			</Col>
			{
				window.screen.width <= 1200 ? "" :
				<Col xs={2} className="custom-scroll">
					<Tab.Pane >
						<Pupil avatar={avatarBig} title="Михайлов Александр Евгеньевич" type="Родитель" mark="4,56" yearsOld={37} birthDate="17.09.1969" pupilClass="6" email="nomail1@online-gymnasium.ru" city="Москва, Московская область" phone="+7 (933) 933 33-66"/>
					</Tab.Pane>
				</Col>
			}
		</>
	)
}
//<OverdueList />


export default connect(
	({ profile, tasks, marks, shortSchedule }: State) => ({ ...profile, expiredTasks: tasks.expired, currentTasks: tasks.current, lastMarks: marks.lastMarks, shortSchedule: shortSchedule.schedule }),
	(dispatch) => {
        return {
            loadTasks: () => {
                return dispatch(loadTasks())
			},
			loadLastMarks: () => {
				return dispatch(loadLastMarks())
			}
        }
    }
)(Home)
