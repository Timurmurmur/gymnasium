import React, { useEffect } from 'react'

import { PerfomanceListItem } from '../..'

import './PerfomanceList.scss'
import { loadTrends } from '../../../redux/actions/trends'
import { connect } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import { PageStatus } from '../../../common/types'
import { State } from '../../../redux/store'
let trends = [];

const PerfomanceList: React.FC<{
    pageStatus: PageStatus;
    error: any;
    trends: any;
    loadTrends: () => void;
    profilePageStatus: PageStatus;
    selectedProfile: any;
}> = ({ pageStatus, error,trends, loadTrends, profilePageStatus, selectedProfile }) => {
    useEffect(() => {
        if (profilePageStatus === PageStatus.LOADED) {
            loadTrends();
        }
    }, [profilePageStatus, selectedProfile])
    if (pageStatus === PageStatus.LOADED || trends !== null) {
        return (
            <div className="performance__table">
                <div className="performance__table-wrapper">
                    <div className="row">
                        {
                            !trends ?
                            <div className="home-empty-data">
                                <img className="home-empty-data__img" src={require('../../../assets/img/book.svg')} alt="books" />
                                <h2>Ждем информацию об успеваемости</h2>
                            </div>
                            :
                            <>
                            {
                                trends.map((el, index) => (
                                    <PerfomanceListItem key={index} url={el.class_id} subject={el.class} isGrow={el.trend} active={el?.active}/>
                                ))
                            }
                            </>
                        }
                        
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="performance__table performance__loading">
                <div className="performance__table-wrapper">
                    <div className="row">
                        {
                            [0,0,0,0,0,0,0,0,0].map((el, index) => (
                                <div key={index} className="col-lg-4 performance__table-cell">
                                    <Skeleton />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
	({ trends, profile }: State) => ({ ...trends, profilePageStatus: profile.pageStatus, selectedProfile: profile.selectedProfile?.id }),
	(dispatch) => {
		return {
			loadTrends: () => {
				return dispatch(loadTrends())
			}
		}
	}
)(PerfomanceList)