import React from 'react'

import classNames from 'classnames'

import './MenuListItem.scss'
import { useLocation, Link } from 'react-router-dom'

const MenuListItem = ({ url, title, active, children, onClick }) => {   
    const location = useLocation(); 

    const linkClickHandler = (e) => {
        if (window.screen.width <= 768){
            onClick(e); 
        }
    }

    return (
        <li onClick={linkClickHandler} className={`menu-list__item ${location.pathname.split("/")[location.pathname.split("/").length - 1] == url.split("/")[url.split("/").length - 1] ? " menu-list__item--active": ""}`}>
            <Link to={url} className="menu-list__link">
                {children}
                <span className="cabinet-header__menu-text">{title}</span>
            </Link>
        </li>
    )
}

export default MenuListItem