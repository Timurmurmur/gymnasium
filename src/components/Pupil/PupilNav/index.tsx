import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import './PupilNav.scss';

const PupilNav: React.FC<{
    tabs: any;
}> = ({ tabs, }) => {
    const [selected, setSelected] = useState(tabs[0].eventKey);
    return (
        <Nav justify className="pupil-nav__container">
            {
                tabs.map((el, index) => (
                    <Nav.Item onClick={e => setSelected(el.eventKey)} className={`pupil-nav__wrapper ${selected === el.eventKey ? "pupil-nav__selected" : ""}`} key={index}>
                        <Nav.Link eventKey={el.eventKey}>
                            {el.label}
                        </Nav.Link>
                    </Nav.Item>
                ))
            }
        </Nav>
    );
}

export default PupilNav;