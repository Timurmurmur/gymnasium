import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_TRENDS, LOAD_TRENDS_ERROR, LOAD_TRENDS_SUCCESS } from '../actions/trends';
import { Action } from '../store';
import { TrendsState } from '../types/trends';

const defaultTasksState = { pageStatus: PageStatus.LOADING, trends: null, error: null, }

const reducer = (state: TrendsState = defaultTasksState, action: Action) => {
    switch(action.type) {
        case LOAD_TRENDS:
            return {
                ...state,
                pageStatus: state.trends === null ? PageStatus.LOADING : state.pageStatus
            }
        case LOAD_TRENDS_SUCCESS:
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                trends: action.trends
            }
        case LOAD_TRENDS_ERROR:
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.error
            }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "trends",
    storage: storage,
    blacklist: []
}, reducer)