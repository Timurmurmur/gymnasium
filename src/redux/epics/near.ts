import { combineEpics, ofType } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, switchMap, mapTo } from "rxjs/operators";
import { FuncEpic } from "../../common/types";
import { LOAD_NEAREST_EVENT, loadNearSuccess, loadNearError } from "../actions/near";

const nearEpic: FuncEpic = (action$: any, store$, deps) => {
    return action$.pipe(
        ofType(LOAD_NEAREST_EVENT),
        switchMap(() => {
            return from(deps.profileDataProvider.loadNearest(store$.value.profile.selectedProfile.id)).pipe(
                switchMap(event => {
                    return of(loadNearSuccess(event))
                }),
                catchError(err => {
                    return of(loadNearError(err))
                })
            )
        })
    )
}

export const nearEpics = combineEpics(nearEpic)