import React, { useEffect, useState } from "react"

import { Container, Row, Col, Table } from 'react-bootstrap'

import { Logo, PupilList, MenuList, SpecialOffer, HeaderDate, PageTitle, NearestEvent, AverageScore, RatingList, Accordion, PupilAttachments, PupilAttachmentItem } from '../../components'
import { DatePicker } from '../../components/DatePicker';
import { loadMarks } from "../../redux/actions/marks";
import { connect } from "react-redux";
import moment from 'moment';
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from "../../common/types";
import { State } from "../../redux/store";

let marks=  {
      average_grade: null,
      'class': 'Русский язык',
      grades: [
        {
          grades: [4,5,6],
          activity_type: 'Домашнее задание 23.11.',
          date_time: '2018-11-23T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-11-25T21:00:00',
          reamining_time: 1543179600,
          last_modified: '2018-11-23T10:30:21',
          attachments: [
            {
              filename: 'Почему доброта и жестокость встречаются вместе.docx',
              url: '/'
            },
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'Сочинение  Томми Петрович.docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Домашнее задание 26.11',
          date_time: '2018-11-26T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-11-27T21:00:00',
          reamining_time: 1543352400,
          last_modified: '2018-11-26T11:46:37',
          attachments: [
            {
              filename: 'Документ Microsoft Word.docx',
              url: '/'
            },
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'дз русский 9 (2).docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Домашнее задание 28.11.',
          date_time: '2018-11-28T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-11-29T21:00:00',
          reamining_time: 1543525200,
          last_modified: '2018-11-28T07:50:05',
          attachments: [
            {
              filename: 'Документ Microsoft Word.docx',
              url: '/'
            },
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'дз русский 9 (2).docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Домашнее задание 30.11',
          date_time: '2018-11-30T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-12-02T21:00:00',
          reamining_time: 1543784400,
          last_modified: '2018-11-30T10:38:01',
          attachments: [
            {
              filename: 'ДЗ по русс.яз от 26.11(Г.Похозяй).docx',
              url: '/'
            },
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'ДЗ по лит-ре от 29.11(П. Георгий).docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Домашнее задание 05.12.',
          date_time: '2018-12-05T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-12-06T21:00:00',
          reamining_time: 1544130000,
          last_modified: '2018-12-05T11:22:50',
          attachments: [
            {
              filename: 'Лит-ра.docx',
              url: '/'
            },
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'Вар 1 ОГЭ 2018.docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Классная работа 07.12',
          date_time: '2018-12-07T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-12-09T21:00:00',
          reamining_time: 1544389200,
          last_modified: '2018-12-07T10:34:00',
          attachments: [
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'ВАРИАНТ 4.docx',
              url: '/'
            },
            {
              filename: '_   ЕГЭ по Блоку (1).docx',
              url: '/'
            }
          ],
          review: ''
        },
        {
          grades: [],
          activity_type: 'Домашнее задание 07.12.',
          date_time: '2018-12-07T00:00:00',
          attempt: null,
          response_status: '',
          last_date: '2018-12-09T21:00:00',
          reamining_time: 1544389200,
          last_modified: '2018-12-07T10:42:51',
          attachments: [
            {
              filename: '.',
              url: '/'
            },
            {
              filename: 'ВАРИАНТ 4.docx',
              url: '/'
            },
            {
              filename: '_   ЕГЭ по Блоку (1).docx',
              url: '/'
            }
          ],
          review: ''
        }
      ]
    }
const Marks: React.FC<{
  pageStatus: PageStatus;
  error: any;
  marks: any;
  loadMarks: (class_id: string, from: Date, to: Date) => void;
  match: any;
  profilePageStatus: PageStatus;
}> = ({ pageStatus, error,marks, loadMarks, match, profilePageStatus }) => {
	const [from, setFrom] = useState(new Date(new Date().getTime() - (24 * 60 * 60 * 1000) * 21));
	const [to, setTo] = useState(moment(new Date()).toDate());
  const [isCalendarOpened, setIsCalendarOpened] = useState(false);

  const isCalendarOpenedChangeCallback = React.useCallback(
    (e) => {
      setIsCalendarOpened(!isCalendarOpened);
    }, [isCalendarOpened]
  )

	useEffect(() => {
		if (profilePageStatus === "LOADED") {
			loadMarks(match.params.class_id, from, to);
		}
	}, [match.params, profilePageStatus])

	const onDateChange = React.useCallback(
		(e) => {
      setFrom(e.detail.date[0]);
      setTo(e.detail.date[1]);
      if (profilePageStatus === PageStatus.LOADED) {
        loadMarks(match.params.class_id, e.detail.date[0], e.detail.date[1]);
      }
		}, [from, to]
	)

	const loadMarksByDate = (e: any) => {
		loadMarks(match.params.class_id, from, to)
	}

		return (
			<Col className='px-0 position-relative'>
				<div className="cabinet-content custom-scroll marks">
						<div className="cabinet-content__wrapper">
						<Row>
							<Col className="content-header">
								<HeaderDate />
							</Col>
						</Row>
						<Row>
							<div className="col-12 col-xl mb-5">
              {
                pageStatus === PageStatus.LOADED ?
                <>
                  {
                    marks && marks?.grades?.length !== 0 ? 
                    <>
                    <PageTitle title={marks.class} >
                      <AverageScore score={marks?.average_grade ? marks?.average_grade?.toFixed(2) : ""} />
                      <a onClick={isCalendarOpenedChangeCallback} id="openCalendarSidebarLink" className="link-to-icon calendar-sidebar__open-link" href="#">
                        <span className="link-to-icon__icon"><i className="icon-calendar-2"></i></span>
                        <span className="link-to-icon__text">Выбрать дату</span>
                      </a>
                    </PageTitle>
                    <RatingList marks={marks.grades}/>
                    </>
                    :
                    <PageTitle title="Нет оценок"/>
                  }
                </>
                :
                <>
                <div className="col-12 cabinet-content__header cabinet-content__loading">
                  <h4 className="cabinet-content__title">
                    <Skeleton />
                  </h4>
                <div className="rating__mark">
                    <div className="rating__mark-title">
                      <Skeleton />
                    </div>
                </div>
                  <a onClick={isCalendarOpenedChangeCallback} id="openCalendarSidebarLink" className="link-to-icon calendar-sidebar__open-link" href="#">
                    <span className="link-to-icon__icon"><i className="icon-calendar-2"></i></span>
                    <span className="link-to-icon__text">Выбрать дату</span>
                  </a>
                </div>
                <div className="rating__table">
                    <Table className="rating-table custom-scroll" responsive>
                        <thead>
                            <tr>
                                <th className="rating-table__h-date">Дата</th>
                                <th>Название активности</th>
                                <th>Оценка</th>
                            </tr>
                        </thead>
                        <tbody> 
                          <tr>
                            <td className="rating-table__date">
                              <Skeleton />
                            </td>
                            <td className="rating-table__activity">
                              <Skeleton />
                            </td>
                            <td >
                              <Skeleton />
                            </td>
                          </tr>
                          <tr>
                            <td className="rating-table__date">
                              <Skeleton />
                            </td>
                            <td className="rating-table__activity">
                              <Skeleton />
                            </td>
                            <td >
                              <Skeleton />
                            </td>
                          </tr>
                          <tr>
                            <td className="rating-table__date">
                              <Skeleton />
                            </td>
                            <td className="rating-table__activity">
                              <Skeleton />
                            </td>
                            <td >
                              <Skeleton />
                            </td>
                          </tr>
                          <tr>
                            <td className="rating-table__date">
                              <Skeleton />
                            </td>
                            <td className="rating-table__activity">
                              <Skeleton />
                            </td>
                            <td >
                              <Skeleton />
                            </td>
                          </tr>
                        </tbody>
                    </Table>
                </div>

                </>
              }
							</div>
							<DatePicker onClick={isCalendarOpenedChangeCallback} opened={isCalendarOpened} onSubmit={loadMarksByDate} onChange={onDateChange} from={from} to={to} />
						</Row>
					</div>
				</div>
			</Col>
		)
}

export default connect(
	({ marks, profile }: State) => ({ ...marks, profilePageStatus: profile.pageStatus }),
	(dispatch) => {
		return {
			loadMarks: (class_id: string, from: Date, to: Date) => {
				return dispatch(loadMarks(class_id, from, to))
			}
		}
	}
)(Marks)
