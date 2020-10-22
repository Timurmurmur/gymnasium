import React from 'react'

import './Logo.scss'
import { Link } from 'react-router-dom';

import logo_icon from '../../../assets/img/logo_icon.svg'
import logo_name from '../../../assets/img/logo_name.svg'

const Logo: React.FC<{ opened: boolean; setOpenedHandler: (e: any) => void; }> = ({ opened, setOpenedHandler }) => {

    return (
        <div className="logo cabinet-header__logo">
            <Link to="/dashboard">
                <div className="logo-group">
                    <img className="logo-group__icon" src={logo_icon} alt="gimnaziya1" />
                    <img className="logo-group__name" src={logo_name} alt="gimnaziya1" />
                </div>
            </Link>
            {
                window.screen.width < 768 ?
                <a href="#" onClick={setOpenedHandler} className="opener"><span></span></a>
                :
                <a id="toggleMenuLink" onClick={setOpenedHandler} className="icon-circle-arrow toggle-menu-link" href="#"><i className={opened ? "icon-arrow_left" : "icon-arrow_right"} /></a>
            }
        </div>
    )
}

export default Logo