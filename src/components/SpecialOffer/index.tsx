import React from 'react'

import './SpecialOffer.scss'

const SpecialOffer: React.FC = () => {

    return (
        <div className="cabinet-header__footer">
            <a className="cabinet-header__footer-link" href="#">
                <i className="icon-fire"></i>
                <span className="cabinet-header__footer-text">Специальное предложение</span>
            </a>
        </div>
    )
}

export default SpecialOffer