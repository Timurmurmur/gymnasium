import React, { useState } from "react"
import moment from 'moment';
import { Container, Row, Col } from 'react-bootstrap'

import { Logo, PupilList, MenuList, SpecialOffer, HeaderDate, PageTitle, NearestEvent, ScheduleDate, ScheduleDaysList, ScheduleDaysListItem } from '../../components'
import { connect } from "react-redux"
import { loadShedule } from "../../redux/actions/shedule"
import Skeleton from "react-loading-skeleton";
import './Schedule.scss';
import LongSchedule from "../../components/Schedule/LongSchedule";
import { PageStatus } from "../../common/types";
import { State } from "../../redux/store";
const schedule = [];

// <Row>
//	<PageTitle title="Расписание на пол года">
//		<LongSchedule/>
//	</PageTitle>
// </Row>

const Schedule: React.FC<{
	pageStatus: PageStatus,
	error: any;
	schedule: Array<any>;
	loadSchedule: (date: Date) => void;
	profilePageStatus: PageStatus;
	selectedProfile: any;
}> = ({ pageStatus, error, schedule, loadSchedule, profilePageStatus, selectedProfile }) => {
	const [date, setDate] = useState(new Date());

	React.useEffect(() => {
		if (profilePageStatus === "LOADED")  {
			loadSchedule(date);
		}
	}, [profilePageStatus, date, selectedProfile])

	const onChangeDateCallback = React.useCallback(
		(e, back) => {
			if (back) {
				let newDate = (new Date(date).setDate(new Date(date).getDate() - 7));
				setDate((new Date(newDate)));
			} else {
				let newDate = (new Date(date).setDate(new Date(date).getDate() + 7));
				setDate((new Date(newDate)));
			}
		}, [date]
	)

	if (pageStatus === PageStatus.LOADED) {
		return (
			<Col className='px-0 position-relative'>
				<div className="cabinet-content custom-scroll">
						<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
						
						<Row>
							<PageTitle title="Расписание">
								<ScheduleDate onChange={onChangeDateCallback} date={date} />
							</PageTitle>
						</Row>
						{
							schedule.length !== 0 ?
							<ScheduleDaysList schedule={schedule}/>
							:
							<div className="row">
							<div className="col">
								<div className="big-media">
								<div className="big-media__img">
								<img src={require('../../assets/img/big-calendar.svg')} alt="calendar" />
								</div>
								<div className="big-media__content">
								<h2>Расписание</h2>
								<p>Еще нет предметов в расписании</p>
								{/* <a href="#" className="btn btn-primary btn--large mt-2">Начать</a> */}
								</div>
							</div>
							</div>
							</div>
							
						}
					</div>
				</div>
			</Col>
		)
	} else {
		return (
			<Col className='px-0 position-relative schedule__loading'>
				<div className="cabinet-content custom-scroll">
						<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
						<Row>
							<PageTitle title="Расписание">
								<ScheduleDate date={date} onChange={onChangeDateCallback} />
							</PageTitle>
						</Row>
						<div className="schedule__table__wrapper custom-scroll" data-set-scroll-height="true" data-scroll="x">
							<ul className="schedule__table-list">
							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>

								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>


							<li className="schedule__table-list-item">
								<div className="schedule-table schedule-table--pl">
								<header className="schedule-table__header">
									<small className="schedule-table__header-date"></small>
									<div className="schedule-table__header-title"></div>
								</header>

								<ul className="schedule-table__list">
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
									<li className="schedule-table__list-item">
									<span className="schedule-table__subj-time"></span>
									<span className="schedule-table__subj-name"></span>
									</li>
								</ul>
								</div>
							</li>

							</ul>
						</div>
					</div>
				</div>
			</Col>
		)
	}
	
}

export default connect(
	({ schedule, profile }: State) => ({ ...schedule, profilePageStatus: profile.pageStatus, selectedProfile: profile.selectedProfile?.id }),
	(dispatch) => {
		return {
			loadSchedule: (date: Date) => {
				return dispatch(loadShedule(date))
			}
		}
	}
)(Schedule)
