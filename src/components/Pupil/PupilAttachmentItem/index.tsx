import React from 'react'

import classNames from 'classnames'

import './PupilAttachmentItem.scss'

const PupilAttachmentItem: React.FC<{
    url: string;
    title: string;
    icon: any;
}> = ({ url, title, icon }) => {

    return (
        <a className="attachment-link" href={url}>
            <i className={classNames('doc-icon', icon)} />
            <span className="doc__text">{title}</span>
        </a>
    )
}

export default PupilAttachmentItem