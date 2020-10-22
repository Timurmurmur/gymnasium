import React from 'react'

import './DocumentUpload.scss'
import Dropzone, { useDropzone } from 'react-dropzone';

//${window.location.origin}
interface DocumentUploadProps {
    uploadDocument: (e: any) => void;
}

const DocumentUpload: React.FC<DocumentUploadProps> = ({ uploadDocument }) => {
    const onDrop = React.useCallback(
        (e) => {
            uploadDocument(e);
        }, []
    )

    const {getRootProps, getInputProps, isDragActive} = useDropzone({ onDrop });
    return (
        <div className="documents__upload" {...getRootProps()}>
            <input {...getInputProps()} />
            <label htmlFor="upload" className="documents__upload-content">
                <label htmlFor="upload" className="btn btn-primary documents__upload-btn">
                    Загрузить
                </label>
                {
                    !isDragActive ?
                    <span className="documents__upload-text">Или перетащите файл в область</span>
                    :
                    <span className="documents__upload-text">Отпустите файл в область</span>
                }
            </label>
        </div>
    )
}


/* 
<input onDrop={onDrop} id="upload" type="file" className="documents__upload-input" />
*/
export default DocumentUpload