import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_LONG_SHEDULE, LOAD_LONG_SHEDULE_ERROR, LOAD_LONG_SHEDULE_SUCCESS } from '../actions/shedule';
import { Action } from '../store';
import { LongSheduleState } from '../types/longShedule';

const defaultScheduleState = { pageStatus: PageStatus.LOADING, schedule: null, error: null, }

const reducer = (state: LongSheduleState = defaultScheduleState, action: Action) => {
    switch(action.type) {
        case LOAD_LONG_SHEDULE: {
            return {
                ...state,
                pageStatus: PageStatus.LOADING,
            }
        }
        case LOAD_LONG_SHEDULE_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                schedule: action.shedule
            }
        }
        case LOAD_LONG_SHEDULE_ERROR: {
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
    key: "longSchedule",
    storage: storage,
    blacklist: []
}, reducer)