import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_MARKS_ERROR, LOAD_MARKS, LOAD_MARKS_SUCCESS, LOAD_LAST_MARKS_ERROR, LOAD_LAST_MARKS, LOAD_LAST_MARKS_SUCCESS  } from '../actions/marks';
import { Action } from '../store';
import { MarksState } from '../types/marks';

const defaultMarksState = { pageStatus: PageStatus.LOADING, marks: null, error: null, lastMarks: null }

const reducer = (state: MarksState = defaultMarksState, action: Action) => {
    switch(action.type) {
        case LOAD_LAST_MARKS: {
            return {
                ...state,
                pageStatus: state.lastMarks === null ? PageStatus.LOADING : state.pageStatus,
            }
        }
        case LOAD_LAST_MARKS_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                lastMarks: action.marks
            }
        }
        case LOAD_LAST_MARKS_ERROR: {
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.error
            }
        }
        case LOAD_MARKS: {
            return {
                ...state,
                pageStatus:  PageStatus.LOADING
            }
        }
        case LOAD_MARKS_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                marks: action.marks
            }
        }
        case LOAD_MARKS_ERROR: {
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
    key: "marks",
    storage: storage,
    blacklist: []
}, reducer)