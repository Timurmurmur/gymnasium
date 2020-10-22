import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_DOCUMENTS, LOAD_DOCUMENTS_ERROR, LOAD_DOCUMENTS_SUCCESS } from '../actions/documents';
import { Action } from '../store';
import { DocumentsState } from '../types/documents';

const defaultDocumentsState = { pageStatus: PageStatus.LOADING, last: null, gymnasium: null, own: null, error: null }

const reducer = (state: DocumentsState = defaultDocumentsState, action: Action) => {
    switch(action.type) {
        case LOAD_DOCUMENTS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADING,
            }
        }
        case LOAD_DOCUMENTS_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                last: action.lastUploads,
                own: action.ownDocuments,
            }
        }
        case LOAD_DOCUMENTS_ERROR: {
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.error
            }
        }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "documents",
    storage: storage,
    blacklist: []
}, reducer)