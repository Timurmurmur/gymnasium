import React from 'react'

import './HeaderBanner.scss'

const HeaderBanner: React.FC<{ title: string, text: string }> = ({ title, text }) => {

    return (
        <div className="banner cabinet-content__banner">
            <div className="banner__title">{title}</div>
            <p className="banner__text">{text}</p>
        </div>
    )
}

export default HeaderBanner