import React, { useState } from 'react'

import './MyTableAccordion.scss'
import { Table, } from 'react-bootstrap'
import ColorfulRectangle from '../ColorfulRectangle'

const Content: React.FC = ({children}) => (
    <Table {...{ className: 'wrapper rating-table custom-scroll' }}>
        <thead>
            <tr>
                <th className="rating-table__h-date">Дата</th>
                <th>Название активности</th>
                <th>Оценка</th>
            </tr>
        </thead>
        <tbody {...{ className: 'accordion-list' }}>
            {children}
        </tbody>
    </Table>
)

const Item: React.FC<{ rateDate: any, rateActivity: any }> = ({ rateDate, rateActivity, children }) => {
  
    const [opened, setOpened] = useState(false)
    
    return (
        <>
        <tr {...{className: `accordion-list__item accordion-item__line accordion-item ${opened ? 'accordion-item--opened': ''}` }} style={{display: "table-row"}} >
            <td className="rating-table__date">{rateDate}</td>
            <td className="rating-table__activity">{rateActivity}</td>
            <td className="rating-table__range">
                <div className="rating-table__range-wrapper">
                    <div className="rating-table__range-list">
                        <ColorfulRectangle className="shape-purple colorful-rect--lg">4</ColorfulRectangle>
                        <ColorfulRectangle className="shape-orange colorful-rect--lg">3</ColorfulRectangle>
                    </div>
                </div>
                <div onClick={() => { setOpened(!opened) }}  className="rating-table__toggle-wrapper rating-table__toggle-link">
                    <span className="rating-table__toggle-link-text">
                        <span className="text-open">Развернуть</span>
                        <span className="text-close d-none">Свернуть</span>
                    </span>
                    <span className="icon-circle-arrow--sm   accordion-item__icon rating-table__toggle-link-icon">
                        <i className="icon-arrow_down"/>
                    </span>
                </div>
            </td>
        </tr>
        <tr {...{ className: 'accordion-item__inner rating-table__tr-toggle' }}>
            <div {...{ className: 'accordion-item__content' }}>
                {children}
            </div>
        </tr>
        </>
    )
} 

export default {Content, Item}