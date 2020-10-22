import React from 'react'

import { TaskItem, TitleLink } from '../..'

import './TaskList.scss'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from '../../../common/types';
import { State } from '../../../redux/store';



const TaskList: React.FC<{
  pageStatus: PageStatus;
  error: any;
  current: Array<any>
}> = ({ pageStatus, error, current }) => {

    if (pageStatus === PageStatus.LOADED || current !== null) {
        return (
            <div className="dashboard__task">
                <h5 className="mb-4">Текущие задания</h5>
                <div className="d-flex flex-wrap">
                    {
                        current?.length === 0 ?
                        <h6>
                            Задания отсутствуют
                        </h6>
                        :
                        <>
                        {
                            current.map((el, index) => (
                                <TaskItem {...el} key={index} />
                            ))
                        }
                        </>
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div className="dashboard__task dashboard__task--loading">
                <h5 className="mb-4">Текущие задания</h5>
                <div className="d-flex flex-wrap">
                <div className="dashboard__item dashboard__task-item">
                      <div className="card task-card task-card--pl card-pl">
                        <div className="app__card-body task-card__body">
                          <div className="card-title task-card__title card-pl__title"></div>
                          <p className="card-text task-card__text card-pl__text"></p>
                          <div className="task-card__inner task-card__inner">
                            <a href="#" className="btn btn-sm task-card__btn card-pl__btn"></a>
                            <footer className="card-footer task-card__date card-pl__footer"></footer>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dashboard__item dashboard__task-item">
                      <div className="card task-card task-card--pl card-pl">
                        <div className="app__card-body task-card__body">
                          <div className="card-title task-card__title card-pl__title"></div>
                          <p className="card-text task-card__text card-pl__text"></p>
                          <div className="task-card__inner task-card__inner">
                            <a href="#" className="btn btn-sm task-card__btn card-pl__btn"></a>
                            <footer className="card-footer task-card__date card-pl__footer"></footer>
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
    ({ tasks }: State) => ({ ...tasks }),
    () => ({})
)(TaskList)
