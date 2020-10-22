import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import profile from './profile'
import tasks from './tasks';
import schedule from './schedule';
import near from './near';
import selectedProfile from './selectedProfile';
import marks from './marks';
import trends from './trends';
import documents from './documents';
import shortSchedule from './shortSchedule';
import longSchedule from './longSchedule';
import user from './user';

export const history = createBrowserHistory();


export default combineReducers({
    router: connectRouter(history),
    profile: profile,
    tasks: tasks,
    schedule: schedule,
    near: near,
    selectedProfile: selectedProfile,
    marks: marks,
    trends: trends,
    documents: documents,
    shortSchedule: shortSchedule,
    longSchedule: longSchedule,
    user: user
})