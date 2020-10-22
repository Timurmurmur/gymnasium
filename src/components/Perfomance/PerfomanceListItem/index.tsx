import React from 'react'

import './PerfomanceListItem.scss'
import { Link } from 'react-router-dom'

const PerfomanceListItem: React.FC<{
    url: string;
    subject: any;
    isGrow: string;
    active: boolean;
}> = ({url, subject, isGrow, active}) => {

    return (
        <div className={`col-lg-4 performance__table-cell ${active ? "active" : "disabled"}`}>
            <Link className="subject m-auto" to={active ? `/dashboard/performance/marks/${url}` : "#"}>
                {subject}
                { isGrow === "neutral" ? ""
                    : 
                    <>
                        {
                            isGrow === "up" ?
                            <span className="subject__icon text-success">
                                <i className="icon-arrow_big_up"/>
                            </span>
                            :
                            <span className="subject__icon text-danger">
                                <i className="icon-arrow_big_down" />
                            </span>
                        }
                    </>
                }
            </Link>
            {
                active === false &&
                <div className="performance__table-empty">
                    <span>
                        Еще нет оценок
                    </span>
                </div>
            }
        </div>
    )
}

export default PerfomanceListItem