import React from 'react'

import './DocumentListItem.scss'
import { connect } from 'react-redux'
import { deleteDocument } from '../../../redux/actions/documents'

interface IDocumentListItemProps {
    img: string;
    text: string;
    type: string;
    size: string;
    status: string;
    icon: any;
    showStatus: boolean;
    url: string;
    thumbnail: any;
    delete: any;
    deleteDocument: (text: string) => void;
}

const DocumentListItem: React.FC<IDocumentListItemProps> = ({ img, text, type, size, status, icon, showStatus, url, thumbnail, delete: deleteDoc, deleteDocument }) => {

    return (
        <li className="list-group-item d-flex align-items-center">
            <div className="document-list__img"><img src={!thumbnail ? "" : thumbnail} alt=""/></div>
            <div className="document-list__text" title={text}>{text}</div>
            <div className="document-list__type"><span className="shape-purple">{type}</span></div>
            <div className="document-list__size">{size}</div>
            {showStatus && <div className="document-list__status">{status}</div>}
            <div className="document-list__ico">
                {
                    deleteDoc ? 
                    <a onClick={e => deleteDocument(text)}>
                        {icon}
                    </a>
                    :
                    <a href={url}>
                        {icon}
                    </a>
                }
            </div>
        </li>
    )
}

export default connect(
    () => ({}),
    (dispatch) => ({
        deleteDocument: (file_name: string) => {
            return dispatch(deleteDocument(file_name))
        }
    })
)(DocumentListItem)