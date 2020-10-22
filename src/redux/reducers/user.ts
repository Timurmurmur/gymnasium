import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_USER_SUCCESS, LOAD_USER_ERROR, LOAD_USER } from '../actions/user';
import { Action } from '../store';
import { UserState } from '../types/user';

const defaultTasksState = { pageStatus: PageStatus.LOADING, user: null, error: null, }

const reducer = (state: UserState = defaultTasksState, action: Action) => {
    switch(action.type) {
        case LOAD_USER:
            return {
                ...state,
                pageStatus: state.user === null ? PageStatus.LOADING : state.pageStatus
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                user: action.user
            }
        case LOAD_USER_ERROR:
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
    key: "user",
    storage: storage,
    blacklist: []
}, reducer)