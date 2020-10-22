import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_PROFILE_SUCCESS, SELECT_PROFILE, selectProfile, LOAD_PROFILE_ERROR, LOAD_PROFILE, LOAD_SELECTED_PROFILE, LOAD_SELECTED_PROFILE_SUCCESS, LOAD_SELECTED_PROFILE_ERROR } from '../actions/profile';
import { Action } from '../store';
import { SelectedProfileState } from '../types/selectedProfile';

const defaultProfileState = { pageStatus: PageStatus.LOADING, profile: null, error: null }

const reducer = (state: SelectedProfileState = defaultProfileState, action: Action) => {
    switch(action.type) {
        case LOAD_SELECTED_PROFILE: {
            return {
                ...state,
                pageStatus: action.pageStatus,
            }
        }
        case LOAD_SELECTED_PROFILE_SUCCESS: {
            return {
                ...state,
                profile: action.profile,
                pageStatus: PageStatus.LOADED
            }
        }
        case LOAD_SELECTED_PROFILE_ERROR: {
            return {
                ...state,
                error: action.error,
                pageStatus: PageStatus.ERROR,
            }
        }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "selectedProfile",
    storage: storage,
    blacklist: []
}, reducer)