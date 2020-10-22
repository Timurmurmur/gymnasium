import React from 'react'

import './PageTitle.scss'

const PageTitle: React.FC<{
    title: string
}> = ({title, children}) => {

    return (
        <div className="col-12 cabinet-content__header">
            <h4 className="cabinet-content__title">{title}</h4>
            {children}
        </div>
    )
}

export default PageTitle