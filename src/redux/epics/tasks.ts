import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { FuncEpic } from "../../common/types";
import { LOAD_TASKS, loadTasks, loadTasksError, loadTasksSuccess } from "../actions/tasks";

const loadTasksEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_TASKS),
        switchMap(() => {
            return from(deps.tasksDataProvider.loadTasks(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(tasks => {
                    return of(loadTasksSuccess(tasks))
                }),
                catchError(err => {
                    return of(loadTasksError(err))
                })
            )
        })
    )
}

export const tasksEpics = combineEpics(loadTasksEpic)