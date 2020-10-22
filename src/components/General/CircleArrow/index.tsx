import React, { useContext, useState } from 'react'

import { AccordionContext, useAccordionToggle } from 'react-bootstrap'

import './CircleArrow.scss'

interface CircleArrowProps {
    eventKey: string;
    callback: any;
}

const CircleArrow: React.FC<CircleArrowProps> = ({ eventKey, callback }) => {

    const [clicked, setClicked] = useState(false)

    const currentEventKey = useContext(AccordionContext)

    const decoratedOnClick = useAccordionToggle(eventKey, () => {
        setClicked(!clicked)
        return callback && callback(eventKey)
     },)

    const isCurrentEventKey = currentEventKey === eventKey

    return (
        <div
            className="icon-circle-arrow cabinet-header__open-user-list ml-auto"
            onClick={decoratedOnClick}
        >
            {clicked ? <i className="icon-arrow_up" /> : <i className="icon-arrow_down" />}
        </div>
    )
}

export default CircleArrow