import React from 'react'

import { Table } from 'react-bootstrap'

import './RatingList.scss'
import {ColorfulRectangle} from '../..'
import RatingListItem, { RatingListItemDescription } from '../RatingListItem'
import AccordionTable from '../../General/MyTableAccordion';

const RatingList: React.FC<{ marks: Array<any> }> = ({ marks }) => {
    
    return (
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
                    {
                        marks.map((el, index) => (
                            <RatingListItem index={index} key={index} {...el}/>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default RatingList