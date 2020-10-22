import React from 'react'

import { PupilAttachmentItem } from '../..'

import './PupilAttachments.scss'

const PupilAttachments: React.FC<{
    attachments: Array<any>;
}> = ({children, attachments}) => {

    return (
        <div>
            {children}
            <div className="cabinet-header__doc-wrapper custom-scroll" data-scroll-theme="hidden-theme" data-scroll-amount="40">
                <ul className="cabinet-header__attachment-list">
                    {
                        attachments.slice(0, 10).map((el, index) => {
                            if(el?.filename) {
                                return (
                                    <li key={index}>
                                        <PupilAttachmentItem url={el.url} title={el.filename} icon={`doc-icon--${el.filename.split(".")[el.filename.split(".").length - 1]}`} />
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index}>
                                        <PupilAttachmentItem url={el.file_link} title={el.file_name} icon={`doc-icon--${el.file_name.split(".")[el.file_name.split(".").length - 1]}`} />
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default PupilAttachments