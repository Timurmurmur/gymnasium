export const LOAD_DOCUMENTS = "@documents/LOAD_DOCUMENTS";
export const LOAD_DOCUMENTS_SUCCESS = "@document/LOAD_DOCUMENTS_SUCCESS";
export const LOAD_DOCUMENTS_ERROR = "@documents/LOAD_DOCUMENTS_ERROR";
export type LOAD_DOCUMENTS = typeof LOAD_DOCUMENTS;
export type LOAD_DOCUMENTS_SUCCESS = typeof LOAD_DOCUMENTS_SUCCESS;
export type LOAD_DOCUMENTS_ERROR = typeof LOAD_DOCUMENTS_ERROR;


export interface LoadDocumentsAction {
    type: LOAD_DOCUMENTS;
}

export const loadDocuments = (): LoadDocumentsAction => ({
    type: LOAD_DOCUMENTS,
});

export interface LoadDocumentsSuccessAction {
    type: LOAD_DOCUMENTS_SUCCESS,
    lastUploads: Array<any>;
    gymnasium: Array<any>;
    ownDocuments: Array<any>;
}

export const loadDocumentsSuccess = ({ lastUploads, gymnasium, ownDocuments }: any): LoadDocumentsSuccessAction => ({
    type: LOAD_DOCUMENTS_SUCCESS,
    lastUploads,
    gymnasium,
    ownDocuments
});

export interface LoadDocumentsErrorAction {
    type: LOAD_DOCUMENTS_ERROR;
    error: any;
}

export const loadDocumentsError = (error: any): LoadDocumentsErrorAction => ({
    type: LOAD_DOCUMENTS_ERROR,
    error
})

export const UPLOAD_DOCUMENTS = "@documents/UPLOAD_DOCUMENTS";
export const UPLOAD_DOCUMENTS_SUCCESS = "@document/UPLOAD_DOCUMENTS_SUCCESS";
export const UPLOAD_DOCUMENTS_ERROR = "@documents/UPLOAD_DOCUMENTS_ERROR";

export type UPLOAD_DOCUMENTS = typeof UPLOAD_DOCUMENTS;
export type UPLOAD_DOCUMENTS_SUCCESS = typeof UPLOAD_DOCUMENTS_SUCCESS;
export type UPLOAD_DOCUMENTS_ERROR = typeof UPLOAD_DOCUMENTS_ERROR;


export interface UploadDocumentsAction {
    type: UPLOAD_DOCUMENTS,
    file: any
}

export const uploadDocuments = (file: any) => ({
    type: UPLOAD_DOCUMENTS,
    file,
});

export interface UploadDocumentsSuccessAction {
    type: UPLOAD_DOCUMENTS_SUCCESS;
}


export const uploadDocumentsSuccess = () => ({
    type: UPLOAD_DOCUMENTS_SUCCESS,
});

export interface UploadDocumentsErrorAction {
    type: UPLOAD_DOCUMENTS_ERROR,
    error: any
}
export const uploadDocumentsError = (error: any): UploadDocumentsErrorAction => ({
    type: UPLOAD_DOCUMENTS_ERROR,
    error
})

export const DELETE_DOCUMENT = "@documents/DELETE_DOCUMENT";
export const DELETE_DOCUMENT_SUCCESS = "@documents/DELETE_DOCUMENT_SUCCESS";
export const DELETE_DOCUMENT_ERROR = "@documents/DELETE_DOCUMENT_ERROR";

export type DELETE_DOCUMENT = typeof DELETE_DOCUMENT;
export type DELETE_DOCUMENT_SUCCESS = typeof DELETE_DOCUMENT_SUCCESS;
export type DELETE_DOCUMENT_ERROR = typeof DELETE_DOCUMENT_ERROR;

export interface DeleteDocumentAction {
    type: DELETE_DOCUMENT;
    file_name: string;
}

export interface DeleteDocumentAction {
    type: DELETE_DOCUMENT;
    file_name: string;
}

export interface DeleteDocumentSuccessAction {
    type: DELETE_DOCUMENT_SUCCESS;
}

export interface DeleteDocumentErrorAction {
    type: DELETE_DOCUMENT_ERROR;
    error: any;
}

export const deleteDocument = (file_name: string): DeleteDocumentAction => ({
    type: DELETE_DOCUMENT,
    file_name
});


export const deleteDocumentSuccess = (): DeleteDocumentSuccessAction => ({
    type: DELETE_DOCUMENT_SUCCESS,
});


export const deleteDocumentError = (error: any): DeleteDocumentErrorAction => ({
    type: DELETE_DOCUMENT_ERROR,
    error
})

export type DocumentsActions = DeleteDocumentAction | DeleteDocumentErrorAction | DeleteDocumentSuccessAction | UploadDocumentsAction | UploadDocumentsErrorAction | UploadDocumentsSuccessAction | LoadDocumentsAction | LoadDocumentsErrorAction | LoadDocumentsSuccessAction;