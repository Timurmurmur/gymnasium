import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { FuncEpic } from "../../common/types";
import { LOAD_MARKS, loadLastMarks, loadLastMarksError, loadLastMarksSuccess, LOAD_LAST_MARKS, loadMarksSuccess, loadMarksError } from "../actions/marks";

const loadLastMarksEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_LAST_MARKS),
        switchMap(() => {
            return from(deps.marksDataProvider.loadLastMarks(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(lastMarks => {
                    return of(loadLastMarksSuccess(lastMarks))
                }),
                catchError(err => {
                    return of(loadLastMarksError(err))
                })
            )
        })
    )
}

const loadMarksEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_MARKS),
        switchMap(({ class_id, from: From, to: To }) => {
            return from(deps.marksDataProvider.loadMarks(store$.value.profile.selectedProfile.id, class_id, From, To)).pipe(
                switchMap(marks => {
                    return of(loadMarksSuccess(marks))
                }),
                catchError(err => {
                    return of(loadMarksError(err))
                })
            )
        })
    )
}

export const marksEpics = combineEpics(loadLastMarksEpic, loadMarksEpic)