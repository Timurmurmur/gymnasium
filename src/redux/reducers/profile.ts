import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_PROFILE_SUCCESS, SELECT_PROFILE, selectProfile, LOAD_PROFILE_ERROR, LOAD_PROFILE } from '../actions/profile';
import { Action } from '../store';
import { ProfileState } from '../types/profile';

const defaultProfileState = { pageStatus: PageStatus.LOADING, user: null, error: null, selectedProfile: null }

const reducer = (state: ProfileState = defaultProfileState, action: Action) => {
    switch(action.type) {
        case LOAD_PROFILE:
            return {
                ...state,
                pageStatus: action.pageStatus
            }
        case LOAD_PROFILE_SUCCESS:
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                user: action.profile,
                selectedProfile: state.selectedProfile === null ? action.profile[0] : state.selectedProfile
            }
        case LOAD_PROFILE_ERROR: 
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.error
            }
        case SELECT_PROFILE:
            return {
                ...state,
                selectedProfile: action.profile,
                
            }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "profile",
    storage: storage,
    blacklist: []
}, reducer)