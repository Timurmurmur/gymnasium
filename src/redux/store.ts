import { createStore, applyMiddleware, compose, } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers'
import { HomeDataProvider } from '../api/HomeDataProvider';
import { persistStore } from 'redux-persist';
import { ProfileDataProvider } from '../api/ProfileDataProvider';
import { profileEpics } from './epics/profile';
import { authMiddleware } from './middleware/auth';
import { TasksDataProvider } from '../api/TasksDataProvider';
import { tasksEpics } from './epics/tasks';
import { scheduleEpics } from './epics/schedule';
import { nearEpics } from './epics/near';
import { marksEpics } from './epics/marks';
import { MarksDataProvider } from '../api/MarksDataProvider';
import { trendsEpics } from './epics/trends';
import { ShceduleDataProvider } from '../api/ScheduleDataProvider';
import { DocumentsDataProvider } from '../api/DocumentsDataProvider';
import { documentsEpics } from './epics/documents';
import { userEpics } from './epics/user';
import { EpicMiddleware } from 'redux-observable';
import { DocumentsActions } from './actions/documents';
import { MarksActions } from './actions/marks';
import { NearestEventActions } from './actions/near';
import { SheduleActions } from './actions/shedule';
import { TasksActions } from './actions/tasks';
import { TrendsActions } from './actions/trends';
import { UserActions } from './actions/user';
import { ProfileActions } from './actions/profile';
import { DocumentsState } from './types/documents';
import { LongSheduleState } from './types/longShedule';
import { MarksState } from './types/marks';
import { NearState } from './types/near';
import { ProfileState } from './types/profile';
import { ScheduleState } from './types/schedule';
import { SelectedProfileState } from './types/selectedProfile';
import { ShortScheduleState } from './types/shortSchedule';
import { TasksState } from './types/tasks';
import { TrendsState } from './types/trends';
import { UserState } from './types/user';

//${window.location.origin}
//http://localhost
const host = `${window.location.origin}/api`;

export type Action = DocumentsActions | MarksActions | NearestEventActions | ProfileActions | SheduleActions | TasksActions | TrendsActions | UserActions;

export interface State {
  documents: DocumentsState;
  longSchedule: LongSheduleState;
  marks: MarksState;
  near: NearState;
  profile: ProfileState;
  schedule: ScheduleState;
  selectedProfile: SelectedProfileState;
  shortSchedule: ShortScheduleState;
  tasks: TasksState;
  trends: TrendsState;
  user: UserState;
}

export interface EpicDeps {
  homeDataProvider: HomeDataProvider;
  profileDataProvider: ProfileDataProvider;
  tasksDataProvider: TasksDataProvider;
  marksDataProvider: MarksDataProvider;
  scheduleDataProvider: ShceduleDataProvider;
  documentsDataProvider: DocumentsDataProvider;
}

const createMiddleware = (
  epicMiddleware: EpicMiddleware<Action, Action, State, EpicDeps>
) => applyMiddleware(epicMiddleware, authMiddleware);

const composeEnhancers = composeWithDevTools({ serialize: true });

const epicMiddleware = createEpicMiddleware<Action, Action, State, EpicDeps>({
  dependencies: {
    homeDataProvider: new HomeDataProvider(host),
    profileDataProvider: new ProfileDataProvider(host),
    tasksDataProvider: new TasksDataProvider(host),
    marksDataProvider: new MarksDataProvider(host),
    scheduleDataProvider: new ShceduleDataProvider(host),
    documentsDataProvider: new DocumentsDataProvider(host),
  }
})



export const store = createStore<State, Action, {}, {}>(
  rootReducer,
  composeEnhancers(createMiddleware(epicMiddleware)),
)
export const persistor = persistStore(store);

epicMiddleware.run(combineEpics(profileEpics, tasksEpics, scheduleEpics, nearEpics, marksEpics, trendsEpics, documentsEpics, userEpics))
