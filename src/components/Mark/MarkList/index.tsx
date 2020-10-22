import React from 'react'

import { MarkItem, TitleLink } from '../..'

import './MarkList.scss'
import { connect } from 'react-redux'
import moment from 'moment';
import { getMarkColor } from '../../../helpers/getMarksColor';
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from '../../../common/types';
import { State } from '../../../redux/store';
//<TitleLink url="#" title="Подробнее"/>
const MarkList: React.FC<{
  pageStatus: PageStatus;
  lastMarks: Array<any>,
  error: any;
}> = ({ pageStatus, lastMarks, error }) => {
    
    if (pageStatus === PageStatus.LOADED) {
        return (
            <div className="dashboard__range">
                <h5 className="mb-4">Последние оценки</h5>
                <div className="d-flex flex-wrap">
                    {
                      lastMarks.map((el, index) => (
                          <MarkItem key={index} mark={el.grade.toFixed(0)} subject={el.class} goal={el.event_type} markDate={!el.date_time ? moment(new Date()).format("DD.MM HH:mm") : moment(el.date_time).format("DD.MM HH:mm")} className={getMarkColor(el.grade)}/>
                      ))
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="dashboard__range dashboard__loading">
                <h5 className="mb-4">{ pageStatus === PageStatus.ERROR ? "Не удалось загрузить последние оценки" : "Последние оценки"} </h5>
                <div className="d-flex flex-wrap">
                    <div className="dashboard__item">
                      <div className="card grade-card grade-card--pl card-pl">
                        <div className="card-body d-inline-flex flex-row">
                          <div className="grade-card__grade">
                            <div className="colorful-circle shape-grey"></div>
                          </div>
                          <div className="d-flex flex-column justify-content-between">
                            <div>
                              <div className="card-title grade-card__title card-pl__title"></div>
                              <p className="card-text grade-card__text card-pl__text"></p>
                            </div>
                            <footer className="card-footer grade-card__footer card-pl__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item">
                      <div className="card grade-card grade-card--pl card-pl">
                        <div className="card-body d-inline-flex flex-row">
                          <div className="grade-card__grade">
                            <div className="colorful-circle shape-grey"></div>
                          </div>
                          <div className="d-flex flex-column justify-content-between">
                            <div>
                              <div className="card-title grade-card__title card-pl__title"></div>
                              <p className="card-text grade-card__text card-pl__text"></p>
                            </div>
                            <footer className="card-footer grade-card__footer card-pl__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item">
                      <div className="card grade-card grade-card--pl card-pl">
                        <div className="card-body d-inline-flex flex-row">
                          <div className="grade-card__grade">
                            <div className="colorful-circle shape-grey"></div>
                          </div>
                          <div className="d-flex flex-column justify-content-between">
                            <div>
                              <div className="card-title grade-card__title card-pl__title"></div>
                              <p className="card-text grade-card__text card-pl__text"></p>
                            </div>
                            <footer className="card-footer grade-card__footer card-pl__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item">
                      <div className="card grade-card grade-card--pl card-pl">
                        <div className="card-body d-inline-flex flex-row">
                          <div className="grade-card__grade">
                            <div className="colorful-circle shape-grey"></div>
                          </div>
                          <div className="d-flex flex-column justify-content-between">
                            <div>
                              <div className="card-title grade-card__title card-pl__title"></div>
                              <p className="card-text grade-card__text card-pl__text"></p>
                            </div>
                            <footer className="card-footer grade-card__footer card-pl__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    ({ marks }: State) => ({ ...marks }),
    (dispatch) => ({})
)(MarkList)