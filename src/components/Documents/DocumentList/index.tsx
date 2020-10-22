import React from 'react'

import './DocumentList.scss'
import { Col } from 'react-bootstrap'

import photoDoc from '../../../assets/img/photo_doc.jpg'
import { DocumentListItem } from '../..'

interface IDocumentListProps {
    title: string;
    icon: any;
    showStatus: boolean;
    documents: any;
    delete: any;
}

const DocumentList: React.FC<IDocumentListProps> = ({title, icon, showStatus = true, documents, delete: deleteDoc}) => {

    return (
        <Col>
            <h4 className="mb-3">{title}</h4>
            <ul className="list-group list-group-flush document-list document-list--search right-sidebar__list">
                {
                    documents.map((el: any, index: number) => {
                        return (
                            <DocumentListItem delete={deleteDoc} thumbnail={el.thumbnail} url={el.file_link} key={index} img={photoDoc} text={!el.file_short_name ? el.file_name : el.file_short_name} type={el.file_format} size={el.file_size} showStatus={showStatus} status={el.file_status} icon={icon}/>
                        )
                    })
                }
                
            </ul>
        </Col>
    )
}

export default DocumentList