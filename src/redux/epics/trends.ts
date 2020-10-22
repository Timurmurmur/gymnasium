import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { FuncEpic } from "../../common/types";
import { LOAD_TRENDS, loadTrendsSuccess, loadTrendsError } from "../actions/trends";

const loadTrendsEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_TRENDS),
        switchMap(() => {
            return from(deps.marksDataProvider.loadTrends(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(trends => {
                    return of(loadTrendsSuccess(trends))
                }),
                catchError(err => {
                    return of(loadTrendsError(err))
                })
            )
        })
    )
}

export const trendsEpics = combineEpics(loadTrendsEpic)