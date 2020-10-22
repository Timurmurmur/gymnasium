import React from 'react'

import { OverdueItem, TitleLink } from '../..'

import './OverdueList.scss'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from '../../../common/types';
import { State } from '../../../redux/store';


const OverdueList: React.FC<{
    pageStatus: PageStatus;
    error: any;
    expired: Array<any>;
}> = ({ pageStatus, error, expired }) => {
    React.useEffect(() => {

    }, [])

    if (pageStatus === PageStatus.LOADED || expired !== null) {
        return (
            <div className="dashboard__overdue">
                <h5 className="mb-4">Просрочено за последнее время <TitleLink url="#" title="Подробнее"/></h5>
                <div className="d-flex flex-wrap">
                    {
                        expired.length === 0 ? 
                        <h6>Задания отсутствуют</h6>
                        :
                        <>
                        {
                            expired.map((el, index) => (
                                <OverdueItem {...el} key={index} />
                            ))
                        }
                        </>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="dashboard__overdue">
                <h5 className="mb-4">Просрочено за последнее время <TitleLink url="#" title="Подробнее"/></h5>
                <div className="d-flex flex-wrap">
                    <div className="dashboard__item">
                      <div className="card overdue-card overdue-card--pl card-pl">
                        <div className="app__card-body">
                          <div className="card-title overdue-card__title card-pl__title"></div>
                          <p className="card-text overdue-card__text card-pl__text"></p>
                          <p className="card-extra-text overdue-card__extra-text card-pl__text"></p>
                          <p className="card-extra-text overdue-card__extra-text-2 card-pl__text"></p>
                          <footer className="card-footer text-right overdue-card__footer"><span
                              className="card-pl__footer"></span></footer>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item">
                      <div className="card overdue-card overdue-card--pl card-pl">
                        <div className="app__card-body">
                          <div className="card-title overdue-card__title card-pl__title"></div>
                          <p className="card-text overdue-card__text card-pl__text"></p>
                          <p className="card-extra-text overdue-card__extra-text card-pl__text"></p>
                          <p className="card-extra-text overdue-card__extra-text-2 card-pl__text"></p>
                          <footer className="card-footer text-right overdue-card__footer"><span
                              className="card-pl__footer"></span></footer>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    ({ tasks }: State) => ({ ...tasks }),
    () => ({})
)(OverdueList)
