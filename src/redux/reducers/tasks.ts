import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PageStatus } from '../../common/types';
import { LOAD_TASKS, LOAD_TASKS_SUCCESS, LOAD_TASKS_ERROR } from '../actions/tasks';
import { Action } from '../store';
import { TasksState } from '../types/tasks';

const defaultTasksState = { pageStatus: PageStatus.LOADING, expired: null,current: null, error: null, }

const reducer = (state: TasksState = defaultTasksState, action: Action) => {
    switch(action.type) {
        case LOAD_TASKS:
            return {
                ...state,
                pageStatus: state.expired === null || state.current === null ? PageStatus.LOADING : state.pageStatus
            }
        case LOAD_TASKS_SUCCESS:
            return {
                ...state,
                pageStatus: PageStatus.LOADED,
                expired: action.tasks.expired,
                current: action.tasks.current
            }
        case LOAD_TASKS_ERROR:
            return {
                ...state,
                pageStatus: PageStatus.ERROR,
                error: action.err
            }
        default: {
            return state
        }
    }
}

export default persistReducer({
    key: "tasks",
    storage: storage,
    blacklist: []
}, reducer)