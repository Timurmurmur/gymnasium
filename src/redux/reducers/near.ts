import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { LOAD_PROFILE_SUCCESS, SELECT_PROFILE, selectProfile, LOAD_PROFILE_ERROR, LOAD_PROFILE } from '../actions/profile';
import { LOAD_NEAREST_EVENT, LOAD_NEAREST_EVENT_SUCCESS, LOAD_NEAREST_EVENT_ERROR } from '../actions/near';
import { Action } from '../store';
import { NearState } from '../types/near';
import { PageStatus } from '../../common/types';

const defaultProfileState = { pageStatus: PageStatus.LOADING, event: null, error: null }

const reducer = (state: NearState = defaultProfileState, action: Action) => {
    switch(action.type) {
        case LOAD_NEAREST_EVENT: {
            return {
                ...state,
                pageStatus: action.pageStatus,
            }
        }
        case LOAD_NEAREST_EVENT_SUCCESS: {
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                event: action.event
            }
        }
        case LOAD_NEAREST_EVENT_ERROR: {
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
    key: "nearest",
    storage: storage,
    blacklist: []
}, reducer)