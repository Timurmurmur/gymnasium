import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_SHORT_SHEDULE, LOAD_SHORT_SHEDULE_SUCCESS, LOAD_SHORT_SHEDULE_ERROR } from '../actions/shedule';
import { Action } from '../store';
import { ShortScheduleState } from '../types/shortSchedule';

const defaultScheduleState = { pageStatus: PageStatus.LOADING, schedule: null, error: null, }

const reducer = (state: ShortScheduleState = defaultScheduleState, action: Action) => {
    switch(action.type) {
        case LOAD_SHORT_SHEDULE: {
            return {
                ...state,
                pageStatus: PageStatus.LOADING,
            }
        }
        case LOAD_SHORT_SHEDULE_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                schedule: action.shedule
            }
        }
        case LOAD_SHORT_SHEDULE_ERROR: {
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.err
            }
        }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "shortSchedule",
    storage: storage,
    blacklist: []
}, reducer)